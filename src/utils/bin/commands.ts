// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

export const start = async (args: string[], isStarted: boolean): Promise<string> => {
  //console.log('commands ts', isStarted)
  //console.log('args', args)
  return getRandomQuestion(sensitiveQuestions)
};

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `                      
 __   __     __  __     __         __        
/\\ "-.\\ \\   /\\ \\/\\ \\\   /\\ \\       /\\ \\       
\\ \\ \\-.  \\  \\ \\ \\_\\ \\  \\ \\ \\____  \\ \\ \\____  
 \\ \\_\\\\"\\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\ 
  \\/_/ \\/_/   \\/_____/   \\/_____/   \\/_____/  
                                                                                                            

Type 'start' and press enter to start.

Once you start, if you encounter the following while facing the questions,
type 'null' and press enter

- don't see a suitable option or answer for yourself
- don't have a specific answer for the question
- feel lost, uncomfortable, or uncertain about the situation
- prefer not to say

`;
};

export const ending = (args?: string[]): string => {
  return `
Welcome to <b><em>Null: There is always room</em></b>.

Here, you are flooded with a series of life situation questions to answer.
Binary, mulitple choice, and open-ended questions.
Here, you may find some questions hard to answer due to
not having a suitable option
not having a specific answer
struggling to make a decision

Then you answer with <b>null</b>,
a value that is defined as an <b>absent</b> or <b>empty</b> value,
and is usually used when a value is <b>not yet determined</b>
in programming.

The notion of null in here is inspired by
<u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.tandfonline.com/doi/abs/10.1080/0740770X.2018.1473986" target="_blank">Becoming NULL: Queer relations in the excluded middle</a></u>
where null manifests an open space for a queer indeterminacy.

Drew by the sense of comfort that null represents
<em>There is always room (for not making a choice)</em> aims to
symbolize the forgiving nature and inclusivity inherent in null.

It's acceptable to refrain from making a choice when faced with life struggles
It's okay to not make a decision sometimes

There is always room (for not making a choice).

Type 'start' and press enter to start.

Once you start, if you encounter the following while facing the questions,
type 'null' and press enter

- don't see a suitable option or answer for yourself
- don't have a specific answer for the question
- feel lost, uncomfortable, or uncertain about the situation
- prefer not to say

`;
};

// Type 'help' to see the list of available commands.
// Type 'sumfetch' to display summary.
// Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.

export const textAnimations: string[] = [
  "blur-text",
  "jumble",
  "color-change",
  "shake",
  "shake-y",
  "wobble",
  "opacity-flash"
]

export let sensitiveQuestions: string[] = [
  "You're filling out a form that asks you to choose your gender, offering only 'male' and 'female' as options. How do you navigate this choice, considering your identity doesn't fit neatly into the binary options presented?",
  "You're attending a networking event where attendees are asked to indicate their profession as either \"entrepreneur\" or \"employee.\" However, you're a freelancer who doesn't fit neatly into either category. How do you classify yourself?",
  "What's your favorite color?",
  "You are 100% satisfied with yourself, yes or no?",
  "A close friend asks for your honest opinion about a decision they're about to make, but you know your honesty might hurt them. Do you tell them the truth or sugarcoat your response?",
  "Do you agree that you don't have any regrets in your life",
  "You're selecting a meal from a menu that only offers options labeled as either \"vegetarian\" or \"non-vegetarian.\" However, you follow a flexitarian diet and occasionally eat meat. What do you choose?",
  "Have you ever been involved in illegal activities?",
  "What mental health issues do you struggle with?",
  "What unresolved family conflicts do you have?",
  "Have you ever struggled with addiction?",
  "What are your deepest fears or insecurities?",
  "Have you ever lied to get out of trouble?",
  "What are some secrets you've never shared with anyone?",
  "Have you ever betrayed someone's trust?",
  "Any regrets about being born or being a human?",
  "What are your regrets about past relationships?",
  "You're participating in a survey that asks for your sexual orientation, offering only \"heterosexual\" or \"homosexual\" as options. As someone who identifies differently on the spectrum, how do you represent yourself?",
  "You're faced with the decision to speak up against injustice in your community, risking backlash and potential harm, or stay silent to avoid confrontation. What do you choose?",
  "Your long-term relationship has hit a rough patch, and you're unsure whether to work through the issues or end it. What do you do?",
  "You're dealing with a setback or failure that has left you feeling defeated and unsure of your abilities. How do you overcome self-doubt and find the resilience to keep moving forward?",
  "You're navigating the complexities of identity and self-discovery, feeling uncertain about who you are and where you belong. How do you embrace the journey of self-exploration and acceptance?",
  "You're facing a major life transition, such as moving to a new city, starting a new job, or ending a significant chapter of your life. How do you cope with the uncertainty and embrace the opportunity for growth and change?",
  "Would you rather always 1) know when someone is lying to you but never be believed when you tell the truth, or 2) always tell when someone is telling the truth but never be able to lie yourself?",
  "Would you rather 1) have a job you hate that pays well or 2) a job you love that pays poorly?",
  "Would you rather be 1) stuck in a job you hate for the rest of your life but have a loving family, or 2) have a dream job but be alone?",
  "You're feeling overwhelmed with stress. Do you: a) Practice meditation to manage stress? b) Seek professional therapy? c) Engage in physical activities?",
  "You're facing a major decision about your education. Do you: a) Choose a practical major with good job prospects? b) Pursue your passion even if it's less financially stable? c) Take a gap year to explore different options?",
  "You're sick of your full-time job and want to find a new passion by pursuing another degree, transitioning to other career paths, or starting a company, which also means sacrificing your current stable life. How do you decide?",
  "You're trying to recover from some pain or grieving, back to normal life. Instead of hurt or fully healed, you're feeling numb and confused. How would you describe the state?"
];

export function getRandomTextAnimation(): string {
  const randomIndex = Math.floor(Math.random() * textAnimations.length);
  return textAnimations[randomIndex]
}

export function getRandomQuestion(questions: string[]): string {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}