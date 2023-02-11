import { CalendarCategoryChoice } from '@/components/pages/calendar/calendarCategoryChoice';
import { CalendarYearChoice } from '@/components/pages/calendar/calendarYearChoice';

import { BaseComponent } from '../../base/baseComponent';

export class CalendarHeader extends BaseComponent {
  root: HTMLElement;
  categoryContainer: HTMLElement;
  yearContainer: HTMLElement;

  constructor(root: HTMLElement) {
    super();
    this.root = root;
    this.categoryContainer = this.createElem(
      'div',
      'category__container flex flex-row w-1/2 xs:w-full mr-2',
    );
    this.createCategoryContainer();
    this.yearContainer = this.createElem(
      'div',
      'year__container flex flex-row w-1/2 xs:w-full ml-2 xs:ml-0',
    );
    this.createYearContainer();
    this.render();
  }

  createCategoryContainer(): void {
    const categoryTitle = this.createElem(
      'div',
      'category__title w-1/2 text-xl',
      'Expense сategory:',
    );
    const categoryChoice = this.createElem('div', 'category__choice flex flex-col w-1/2');
    new CalendarCategoryChoice(categoryChoice);
    this.categoryContainer.append(categoryTitle, categoryChoice);
  }

  createYearContainer(): void {
    const yearTitle = this.createElem('div', 'year__title text-xl w-1/2', 'Year:');
    const yearChoice = this.createElem('div', 'year__choice flex flex-col w-1/2');
    new CalendarYearChoice(yearChoice);
    this.yearContainer.append(yearTitle, yearChoice);
  }

  render(): void {
    this.root.append(this.categoryContainer, this.yearContainer);
  }
}