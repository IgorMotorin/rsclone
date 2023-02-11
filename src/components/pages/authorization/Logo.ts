import { BaseComponent } from '../../base/baseComponent';

// interface ILogo {
//   text: string;
// }

export class Logo extends BaseComponent {
  node: HTMLElement;

  constructor() {
    super();
    this.node = this.build();
  }
  build(): HTMLElement {
    const input = this.appendElem(
      {
        div: {
          class: 'w-full max-w-md space-y-4',
        },
      },
      {
        img: {
          class: 'mx-auto h-12 w-auto',
          src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
          alt: 'Your Company',
        },
        h2: {
          class: 'mt-6 text-center text-3xl font-bold tracking-tight text-gray-900',
          textContent: 'Sign in to your account',
        },
      },
    );

    return input;
  }
}
