import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ShortenPipe } from 'src/app/components/shared/movie-card/movie-card.shorten.pipe';
@Directive({
  selector: '[appShowMoreDirective]',
})
export class ShowMoreDirectiveDirective {
  @Input() set appShowMoreDirective(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
      // const rootNodes = embeddedViewRef.rootNodes;
      // const pTag = rootNodes[0].querySelector('p');
      // const longText = pTag.textContent
      // pTag.textContent = this.shortenPipe.transform(longText, 150);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private shortenPipe: ShortenPipe
  ) {}
}
