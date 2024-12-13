import Markdown from "react-markdown";

const markdown = `
## Hi there 👋

Welcome to my page.

## About me

I'm a software engineer who's worked in networking, cybersecurity, web development, and more.
If you'd like to learn more about my professional skills and experiences, find out more [here.](/about)
But enough about the boring stuff.

I love astronomy and astrophotography (though I may not be so good at it). Another thing I love that I'm not so good at is martial arts.
I've trained in Muay Thai and would like to soon pick up Judo or Brazilian Jiu-Jitsu. Watching freestyle wrestling, boxing, and mixed martial arts is always fun.
I also enjoy fighting games, such as the Street Fighter series.

However, I'm not all about violence. During the winter, I love to go snowboarding with my friends.
I think I could go on about all the interests I have, but I think that's better to save for conversation.

## Contact me

If you need any professional consulting, are looking to contract me or offer a job, or would just like to chat, reach me with any of the following methods.

Since I have a ton of experience and passion in Python and Django, you can find me in either of their official Discord servers.

- [Python](https://discord.com/invite/python)
- [Django](https://discord.com/invite/xcRH6mN4fa)

If you don't have discord but would still like to reach me, just fill out my [contact form.](/contact)

## Have fun

- [__reCAPTCHA__](/recaptcha) no, not that one

Feel free to [sponsor me ❤️](https://github.com/sponsors/yoonthegoon/)

`;

export default function Home() {
  return (
    <main className="my-12 flex flex-grow">
      <Markdown className="prose mx-auto">{markdown}</Markdown>
    </main>
  );
}
