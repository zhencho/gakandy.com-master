import Contact from '../components/Contact';
import AppointmentCalendar from '../components/contact/AppointmentCalendar';

export default function ContactPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#06131f_0%,#081522_100%)] pt-20">
      <Contact />
      
      {/* Appointment Calendar Section */}
      <section className="bg-[linear-gradient(180deg,#07131f_0%,#0b1c2c_100%)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AppointmentCalendar />
          </div>
        </div>
      </section>
    </div>
  );
}
