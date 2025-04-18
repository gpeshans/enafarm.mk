import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
    title: 'Контакт'
};

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Контакт</h1>
            <p className="mb-4 flex">
                <FontAwesomeIcon icon={faPhone} height={24} />
                <a className="pl-4" href="tel:+38933471246">
                    033 471 246
                </a>
            </p>
            <p className="mb-4 flex">
                <FontAwesomeIcon icon={faEnvelope} height={24} />
                <a className="pl-4" href="mailto:enafarm93@yahoo.com">
                    enafarm93@yahoo.com
                </a>
            </p>
            <p className="mb-4 flex">
                <FontAwesomeIcon icon={faInstagram} height={24} />
                <a
                    className="pl-4"
                    href="https://www.instagram.com/enafarmapteka/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @enafarmapteka
                </a>
            </p>
            <p className="mb-4 flex">
                <FontAwesomeIcon icon={faFacebookF} height={24} />
                <a
                    className="pl-4"
                    href="https://www.facebook.com/people/%D0%90%D0%BF%D1%82%D0%B5%D0%BA%D0%B0-%D0%95%D0%BD%D0%B0-%D0%A4%D0%B0%D1%80%D0%BC/100057394512520/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Аптека Ена-Фарм
                </a>
            </p>
            <div className="flex justify-start">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d514.2272177213713!2d22.853878937923312!3d41.710568668114824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa124c48d7fb9b%3A0xbb5c2a172a08f69b!2z0JDQv9GC0LXQutCwINCV0L3QsC3QpNCw0YDQvA!5e1!3m2!1sen!2smk!4v1745012365957!5m2!1sen!2smk&key=AIzaSyAV4ER_rXKQVJBmuI_q44a7aehsQ38_hxM"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}
