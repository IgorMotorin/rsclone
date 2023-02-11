import { BaseComponent } from './baseComponent';

export class TransactionStatisticItem extends BaseComponent {
  root: HTMLElement;
  color: string;
  title: string;
  value: string;
  width: string;
  textColor: string;
  progressChecker: HTMLElement;

  constructor(
    root: HTMLElement,
    color: string,
    title: string,
    width: string,
    value: string,
    textColor?: string,
  ) {
    super();

    this.root = root;
    this.color = color;
    this.title = title;
    this.width = width;
    this.value = value;
    this.progressChecker = this.createElem('div', 'graph__item_checker h-4 relative');

    if (textColor === undefined) {
      this.textColor = 'stone-600';
    } else {
      this.textColor = textColor;
    }

    this.render();
  }
  render(): void {
    const graphItem = this.createElem(
      'div',
      `w-full items-center text-${this.textColor} font-light flex gap-2`,
    );
    const graphItemTitle = this.createElem('div', 'graph__item_title w-16', `${this.title}:`);
    const graphItemProgress = this.createElem('div', 'graph__item_progress h-4 grow');

    this.progressChecker.style.width = `${this.width}%`;

    this.progressChecker.style.backgroundColor = this.color;
    graphItemProgress.appendChild(this.progressChecker);
    const graphItemSum = this.createElem('div', 'graphSum w-16 text-right', `${this.value}`);

    graphItem.append(graphItemTitle, graphItemProgress, graphItemSum);
    this.root.appendChild(graphItem);
  }
}