export default function ContactMap() {
  return (
    <figure className="rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040.0347140135473!2d17.876328576779944!3d59.248860517459654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7157b6f61187%3A0x3d6be5265c3bde8!2zw5ZyYnJpbmtlbiA4LCAxNDMgMzIgVsOlcmJ5!5e0!3m2!1ssv!2sse!4v1746533832244!5m2!1ssv!2sse"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </figure>
  );
}
