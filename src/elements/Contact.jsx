export default function Contact() {
  return(
    <form action="contact" method="POST">
      <label htmlFor="from">From</label>
      <input id="from" name="from" type="text" placeholder="Name..." />

      <label htmlFor="reply_to">Reply To</label>
      <input id="reply_to" name="reply_to" type="email" placeholder="Address..." />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Message..." />

      <input type="submit" value="Submit" />
    </form>
  )
}
