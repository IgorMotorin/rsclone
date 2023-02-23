import { BaseComponent } from '@/components/base/baseComponent';
import { ReportStatisticItem } from '@/components/pages/report/reportStatisticItem';
import type { ReportDataItem, ProgressWidth } from '@/components/pages/report/type';

export class StatisticBlock extends BaseComponent {
  root: HTMLElement;
  title: string;
  sum: string;
  titleColor: string;
  data: ReportDataItem[];
  currency: string;
  dataWidth: ProgressWidth;

  constructor(
    root: HTMLElement,
    title: string,
    sum: string,
    data: ReportDataItem[],
    titleColor: string,
    currency: string,
    dataWidth: ProgressWidth,
  ) {
    super();

    this.root = root;
    this.title = title;
    this.sum = sum;
    this.data = data;
    this.dataWidth = dataWidth;
    // if (titleColor === undefined) {
    //   this.titleColor = 'stone-600';
    // } else {
    this.titleColor = titleColor;
    // }
    this.currency = currency;

    this.render();
  }

  render(): void {
    const container = this.createElem(
      'div',
      `flex flex-col border-2 mb-2 font-light box-border text-${this.titleColor}`,
    );
    const statisticTitleContainer = this.createElem('div', 'flex justify-between bg-slate-200');
    const statisticTitle = this.createElem('div', 'text-2xl mb-2 ml-2', `${this.title}`);
    const statisticTitleSum = this.createElem(
      'div',
      'text-2xl mb-2 mr-2 font-normal',
      `${this.sum}`,
    );
    const statisticItems = this.createElem(
      'div',
      `statisticItems p-2 max-h-72 overflow-y-scroll flex flex-col`,
    );

    // let sumLengthValue = 0;
    // let sumLengthTitle = 0;

    // this.data.forEach((item) => {
    //   const itemLengthValue = String(item.value).split('').length;
    //   const itemLengthTitle = item.title.split('').length;

    //   if (itemLengthValue > sumLengthValue) {
    //     sumLengthValue = itemLengthValue;
    //   }

    //   if (itemLengthTitle > sumLengthTitle) {
    //     sumLengthTitle = itemLengthTitle;
    //   }
    // });

    this.data.forEach((item) => {
      new ReportStatisticItem(
        statisticItems,
        item.color,
        item.title,
        item.width,
        `${item.value}${this.currency}`,
        this.dataWidth.lengthValue,
        this.dataWidth.lengthTitle,
      );
    });

    statisticTitleContainer.append(statisticTitle, statisticTitleSum);
    container.append(statisticTitleContainer, statisticItems);
    this.root.appendChild(container);
  }
}
