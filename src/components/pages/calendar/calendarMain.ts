import { BaseComponent } from '@/components/base/baseComponent';
import type { Model } from '@/components/model/model';
import { monthArrayEng } from '@/components/pages/calendar/calendarMonthData';
import { CalendarMonthProgress } from '@/components/pages/calendar/calendarMonthProgress';

export class CalendarMain extends BaseComponent {
  root: HTMLElement;
  mainMonthContainer: HTMLElement;
  yearMoney: number;
  model: Model;

  constructor(root: HTMLElement, model: Model) {
    super();
    this.root = root;
    this.model = model;
    this.mainMonthContainer = this.createElem(
      'div',
      'mainMonth__container grid grid-cols-4 xs:grid-cols-1 md:grid-cols-2 gap-1 w-full h=w',
    );
    this.createMonth(`${this.textTranslate('CategoryExpenditure.All')}`, '2023');
    this.render();
    this.yearMoney = 0;
  }

  createMonth(category: string, year: string): void {
    this.mainMonthContainer.textContent = '';
    const everyMonthMoney: number[] = [];
    const maxMonthMoney = this.getMaxMonthMoney(everyMonthMoney, category, year);

    monthArrayEng.forEach((a, index) => {
      const monthHtml = this.createElem(
        'div',
        `mainMonth__${a} flex flex-col place-content-around h-40 border-2 p-3`,
      );

      new CalendarMonthProgress(
        monthHtml,
        a,
        Number(everyMonthMoney[index]),
        maxMonthMoney,
        this.model.currencyName,
      );
      this.mainMonthContainer.append(monthHtml);
    });
  }

  getMaxMonthMoney(everyMonthMoney: number[], category: string, year: string): number {
    for (let i = 0; i < 12; i += 1) {
      const money = this.getMonthTransactions(i, category, Number(year));

      this.yearMoney += money;
      everyMonthMoney.push(money);
    }

    const everyMonthMoneySort = [...everyMonthMoney];
    const maxMonthMoney = everyMonthMoneySort.sort((a, b) => (a < b ? 1 : -1))[0];

    return Number(maxMonthMoney);
  }

  getMonthTransactions(index: number, categoryVal: string, year: number): number {
    const monthData = this.model.transaction.filter((a) => {
      return (
        new Date(a.date).getMonth() === index &&
        a.type === 'Expense' &&
        new Date(a.date).getFullYear() === year
      );
    });
    let monthDataRes = [];

    if (categoryVal === 'All' || categoryVal === 'Все') {
      monthDataRes = monthData;
    } else {
      monthDataRes = monthData.filter((a) => {
        return (
          a.category === categoryVal ||
          `${this.textTranslate(`CategoryExpenditure.${a.category}`)}` === categoryVal
        );
      });
    }

    let monthMoney = 0;

    monthDataRes.forEach((a) => {
      monthMoney += a.sum;
    });

    return monthMoney;
  }

  render(): void {
    this.root.append(this.mainMonthContainer);
  }
}
