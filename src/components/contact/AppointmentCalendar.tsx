import React, { useState, useEffect } from 'react';
import { format, addDays, setHours, setMinutes, startOfWeek, isSameDay } from 'date-fns';
import { supabase } from '../../lib/supabase';

interface TimeSlot {
  time: Date;
  isBooked: boolean;
}

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
}

const AppointmentCalendar: React.FC = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [bookedSlots, setBookedSlots] = useState<Date[]>([]);
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Generate random booked slots for the week when component mounts or week changes
  useEffect(() => {
    const generateRandomBookedSlots = () => {
      const slots: Date[] = [];
      const weekDays = generateWeekDays();
      
      // Generate 5-8 random booked slots for the week
      const numberOfSlots = Math.floor(Math.random() * 4) + 5; // 5 to 8 slots
      
      while (slots.length < numberOfSlots) {
        // Random day from the current week's weekdays
        const randomDayIndex = Math.floor(Math.random() * weekDays.length);
        const date = new Date(weekDays[randomDayIndex]);
        
        // Random hour (9-17 for 9 AM to 5:15 PM to allow for 45-min slots ending at 6:00 PM)
        const randomHour = Math.floor(Math.random() * 9) + 9;
        // Random minutes (0 or 45 for 45-minute slots)
        const randomMinutes = Math.random() < 0.5 ? 0 : 45;
        
        date.setHours(randomHour, randomMinutes, 0, 0);
        
        // Check if slot is already booked and is not in the past
        const now = new Date();
        // Ensure the slot doesn't start after 5:15 PM
        const isValidTime = date.getHours() < 18 || (date.getHours() === 17 && date.getMinutes() <= 15);
        
        if (!slots.some(existingSlot => 
            existingSlot.getTime() === date.getTime()) && 
            date > now &&
            isValidTime) {
          slots.push(date);
        }
      }
      
      return slots.sort((a, b) => a.getTime() - b.getTime());
    };

    setBookedSlots(generateRandomBookedSlots());
  }, [currentWeekStart]); // Regenerate when week changes

  // Generate time slots for a given date (9 AM to 5:15 PM, 45-minute intervals)
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const now = new Date();
    let currentTime = setHours(setMinutes(date, 0), 9); // Start at 9 AM
    const endTime = setHours(setMinutes(date, 15), 17); // End at 5:15 PM (last appointment ends at 6:00 PM)

    while (currentTime <= endTime) {
      // Skip slots that are in the past
      const isInPast = currentTime < now;
      const isSlotBooked = bookedSlots.some(bookedTime =>
        isSameDay(currentTime, bookedTime) &&
        currentTime.getHours() === bookedTime.getHours() &&
        currentTime.getMinutes() === bookedTime.getMinutes()
      );

      slots.push({
        time: new Date(currentTime),
        isBooked: isSlotBooked || isInPast
      });

      currentTime = new Date(currentTime.getTime() + 45 * 60000); // Add 45 minutes
    }

    return slots;
  };

  // Generate weekdays starting from current date
  const generateWeekDays = (): Date[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const days: Date[] = [];
    let currentDay = new Date(currentWeekStart);
    
    // If we're starting a new week and it's not Monday, adjust to next Monday
    if (currentDay < today) {
      currentDay = today;
    }
    
    // Generate 5 weekdays from current day
    while (days.length < 5) {
      if (currentDay.getDay() !== 0 && currentDay.getDay() !== 6) { // Skip weekends
        days.push(new Date(currentDay));
      }
      currentDay.setDate(currentDay.getDate() + 1);
    }
    
    return days;
  };

  // Function to go to next week
  const goToNextWeek = () => {
    setCurrentWeekStart(prev => {
      const next = new Date(prev);
      next.setDate(next.getDate() + 7);
      return next;
    });
  };

  // Function to go to previous week
  const goToPreviousWeek = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    setCurrentWeekStart(prev => {
      const next = new Date(prev);
      next.setDate(next.getDate() - 7);
      
      // Don't allow going before current date
      if (next < today) {
        return new Date(today);
      }
      return next;
    });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleTimeSlotClick = (slot: TimeSlot) => {
    if (!slot.isBooked) {
      setSelectedSlot(slot);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSlot) {
      setErrorMessage('Please select a time slot');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    
    try {
      const { error } = await supabase
        .from('appointments')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            appointment_time: selectedSlot.time.toISOString(),
          }
        ]);

      if (error) {
        console.error('Error booking appointment:', error);
        setStatus('error');
        setErrorMessage(error.message || 'Failed to book appointment. Please try again.');
        return;
      }
      
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
      setSelectedSlot(null);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    } catch (error: any) {
      console.error('Error booking appointment:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  const timeSlots = generateTimeSlots(selectedDate);
  const weekDays = generateWeekDays();

  return (
    <div className="rounded-[1.75rem] border border-[#24435d] bg-[rgba(12,27,42,0.92)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm">
      <h3 className="mb-6 bg-gradient-to-r from-[#f4fbff] to-[#7cd8ff] bg-clip-text text-2xl font-bold text-transparent">
        Book an Appointment
      </h3>
      
      {/* Calendar Navigation and Week View */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={goToPreviousWeek}
            className="rounded-lg p-2 text-[#dce7f1] transition-colors hover:bg-[#102335]"
            disabled={currentWeekStart <= new Date()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="font-medium text-[#dce7f1]">
            {format(weekDays[0], 'MMMM d')} - {format(weekDays[weekDays.length - 1], 'MMMM d, yyyy')}
          </span>
          <button
            onClick={goToNextWeek}
            className="rounded-lg p-2 text-[#dce7f1] transition-colors hover:bg-[#102335]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {weekDays.map((date, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-sm font-medium text-[#9db0c3]">
                {format(date, 'EEE')}
              </div>
              <button
                onClick={() => handleDateClick(date)}
                className={`w-full py-2 px-1 rounded-lg text-sm transition-all duration-300 ${
                  isSameDay(selectedDate, date)
                    ? 'bg-[#12314a] text-white'
                    : 'text-[#dce7f1] hover:bg-[#102335]'
                }`}
              >
                <span className="block font-medium">
                  {format(date, 'd')}
                </span>
                <span className="text-xs opacity-70">
                  {format(date, 'MMM')}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="mb-6">
        <h4 className="mb-4 text-lg font-semibold text-[#f4fbff]">
          Available Times for {format(selectedDate, 'MMMM d, yyyy')}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleTimeSlotClick(slot)}
              disabled={slot.isBooked}
              className={`
                px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                ${selectedSlot?.time === slot.time
                  ? 'bg-[#12314a] text-white shadow-lg'
                  : slot.isBooked
                  ? 'cursor-not-allowed bg-red-500/15 text-red-300'
                  : 'bg-[#102335] text-[#dce7f1] shadow-sm hover:bg-[#12314a]'
                }
              `}
            >
              {format(slot.time, 'h:mm a')}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Time Display and Contact Form */}
      {selectedSlot && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 rounded-lg border border-[#24435d] bg-[#102335] p-4">
            <p className="font-medium text-[#dce7f1]">
              Selected Time: {format(selectedSlot.time, 'EEEE, MMMM d')} at {format(selectedSlot.time, 'h:mm a')}
            </p>
          </div>

          {/* Contact Details Form */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#dce7f1]">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-lg border border-[#24435d] bg-[#102335] px-4 py-2 text-[#f4fbff] transition-all duration-300 focus:border-[#4ec4ff] focus:ring-2 focus:ring-[#12314a]"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#dce7f1]">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-lg border border-[#24435d] bg-[#102335] px-4 py-2 text-[#f4fbff] transition-all duration-300 focus:border-[#4ec4ff] focus:ring-2 focus:ring-[#12314a]"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#dce7f1]">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full rounded-lg border border-[#24435d] bg-[#102335] px-4 py-2 text-[#f4fbff] transition-all duration-300 focus:border-[#4ec4ff] focus:ring-2 focus:ring-[#12314a]"
                placeholder="+94 77 123 4567"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`
              w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300
              ${status === 'loading'
                ? 'bg-[#24435d] cursor-wait text-white'
                : status === 'success'
                ? 'bg-green-500 text-white'
                : status === 'error'
                ? 'bg-red-500 text-white'
                : 'bg-[#FFC635] hover:bg-[#ffd86a] text-[#06131f]'
              }
            `}
          >
            {status === 'loading' 
              ? 'Booking...' 
              : status === 'success'
              ? 'Appointment Booked!'
              : status === 'error'
              ? 'Booking Failed'
              : 'Book Appointment'
            }
          </button>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 text-sm text-center mt-2">
              {errorMessage}
            </p>
          )}

          {/* Status Message */}
          {status === 'success' && (
            <p className="text-green-600 text-sm text-center">
              Your appointment has been booked successfully! We'll send you a confirmation email shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default AppointmentCalendar;
