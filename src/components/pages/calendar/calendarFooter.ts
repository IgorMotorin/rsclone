import { BaseComponent } from '@/components/base/baseComponent';
import type { ITransactionReq } from '@/components/model/types';

export class CalendarFooter extends BaseComponent {
  root: HTMLElement;
  footerInfoContainer: HTMLElement;
  footerInfoTotal: HTMLElement;
  footerInfoTotalCount: HTMLElement;
  footerInfoAverage: HTMLElement;
  footerInfoAverageCount: HTMLElement;
  footerInfoTotalIncome: HTMLElement;
  footerInfoTotalIncomeCount: HTMLElement;
  footerInfoRatio: HTMLElement;
  footerInfoRatioCount: HTMLElement;
  transactionData: ITransactionReq[]
  year: string;

  constructor(root: HTMLElement, transactionData: ITransactionReq[], year: string) {
    super();
    this.root = root;
    this.transactionData = transactionData;
    this.year = year;
    this.footerInfoContainer = this.createElem(
      'div',
      'footerInfo__container grid grid-cols-2 xs:grid-cols-1 gap-1 w-1/2 xs:w-full sm:w-2/3 md:w-3/5',
    );

    this.footerInfoTotal = this.createElem(
      'div',
      'footerInfoTotal__title text-sm text-left',
      'Expenditure total:',
    );
    this.footerInfoAverage = this.createElem('div', 'average__title text-sm text-left', 'Average:');
    this.footerInfoTotalIncome = this.createElem(
      'div',
      'footerInfoTotalIncome__title text-sm text-left',
      'Total income:',
    );
    this.footerInfoRatio = this.createElem(
      'div',
      'footerInfoRatio__title text-sm text-left',
      'Expenditure/Income:',
    );

    this.footerInfoTotalCount = this.createElem(
      'div',
      'footerInfoTotalCount__title text-sm text-right xs:text-left',
      '2.885 $',
    );
    this.footerInfoAverageCount = this.createElem(
      'div',
      'averageCount__title text-sm text-right xs:text-left',
      '292.4 $/month',
    );
    this.footerInfoTotalIncomeCount = this.createElem(
      'div',
      'footerInfoTotalIncomeCount__title text-sm text-right xs:text-left',
      '3.100 $',
    );
    this.footerInfoRatioCount = this.createElem(
      'div',
      'footerInfoRatioCount__title text-sm text-right xs:text-left',
      '93.06 %',
    );
    this.updateCalendarFooter(this.year);
    this.render();
  }

  updateCalendarFooter(year: string){
    let totalIncomeValue = 0;
    this.year = year;
    let totalExpenditureValue = 0;
    this.transactionData.forEach((a) => {if (new Date(a.date).getFullYear() === Number(this.year)){if (a.type === 'Income') {totalIncomeValue += a.sum} else {totalExpenditureValue += a.sum}}});
    this.footerInfoTotalIncomeCount.textContent = String(totalIncomeValue) + '$';
    this.footerInfoTotalCount.textContent = String(totalExpenditureValue) + '$';
    this.footerInfoAverageCount.textContent = String(Math.round(totalExpenditureValue / 1.2) / 10) + '$/month'
    const expensIncome = totalExpenditureValue / totalIncomeValue
    if (isFinite(expensIncome)) {this.footerInfoRatioCount.style.display = 'block'; this.footerInfoRatio.style.display = 'block';this.footerInfoRatioCount.textContent = String(Math.round(expensIncome * 100)) + '%'}
    else {this.footerInfoRatioCount.style.display = 'none'; this.footerInfoRatio.style.display = 'none'}
  }

  render(): void {
    this.footerInfoContainer.append(
      this.footerInfoTotal,
      this.footerInfoTotalCount,
      this.footerInfoAverage,
      this.footerInfoAverageCount,
      this.footerInfoTotalIncome,
      this.footerInfoTotalIncomeCount,
      this.footerInfoRatio,
      this.footerInfoRatioCount,
    );
    this.root.append(this.footerInfoContainer);
  }
}
