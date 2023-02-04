import { View } from './components/view';

export class App {
  private view: View;

  constructor() {
    this.view = new View();
  }

  render(): void {
    this.view.render();
  }
}