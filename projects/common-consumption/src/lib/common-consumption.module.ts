import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import { LayoutModule } from './layout/layout.module';
import { ModalModule } from './modal/modal.module';
import { LibraryFiltersModule } from './library-filters/library-filters.module';
import { ContentDetailsModule } from './content-details/content-details.module';
import { FaqModule } from './faq/faq.module';
import { AccordionModule } from './accordion/accordion.module';
import { PipesModule } from './pipes-module/pipes-module.module';
import { PagesModule } from './pages/pages.module';
import { CertificateActionsModule } from './certificate/certificate-actions/certificate-actions.module';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ModalModule,
    LayoutModule,
    LibraryFiltersModule,
    ContentDetailsModule,
    FaqModule,
    AccordionModule,
    PipesModule,
    PagesModule,
    CertificateActionsModule

  ],
  exports: [
    CardModule,
    ModalModule,
    LayoutModule,
    LibraryFiltersModule,
    ContentDetailsModule,
    FaqModule,
    AccordionModule,
    PipesModule,
    PagesModule,
    CertificateActionsModule
  ]
})
export class CommonConsumptionModule { }
