import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import {MatDialogModule} from '@angular/material/dialog';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PsicologiaComponent } from './pages/pregrado/psicologia/psicologia.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpUnicaComponent } from './pages/exp-unica/exp-unica.component';
import { CarouselVideosComponent } from './sections/carousel-videos/carousel-videos.component';
import { LiveChatComponent } from './sections/live-chat/live-chat.component';
import { CarouselFotosComponent } from './sections/carousel-fotos/carousel-fotos.component';
import { RedesSocialesComponent } from './sections/redes-sociales/redes-sociales.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { DisenoIndustrialComponent } from './pages/pregrado/diseno-industrial/diseno-industrial.component';
import { SafeInsertionPipe } from './pipes/safe-insertion.pipe';
import { MenuUnoComponent } from './sections/menu-uno/menu-uno.component';
import { XpComponent } from './layout/xp/xp.component';
import { MenuDosComponent } from './sections/menu-dos/menu-dos.component';
import { PromoComponent } from './sections/promo/promo.component';
import { StandComponent } from './layout/stand/stand.component';
import { MenuStandComponent, formStands } from './sections/menu-stand/menu-stand.component';
import { ArquitecturaComponent } from './pages/pregrado/arquitectura/arquitectura.component';
import { ComunicacionSocialComponent } from './pages/pregrado/comunicacion-social/comunicacion-social.component';
import { AdministracionEmpresaComponent } from './pages/pregrado/administracion-empresa/administracion-empresa.component';
import { MercadeoComponent } from './pages/pregrado/mercadeo/mercadeo.component';
import { TecnologiaMercadeoComponent } from './pages/pregrado/tecnologia-mercadeo/tecnologia-mercadeo.component';
import { NegociosInternacionalesComponent } from './pages/pregrado/negocios-internacionales/negocios-internacionales.component';
import { IngIndustrialComponent } from './pages/pregrado/ing-industrial/ing-industrial.component';
import { IngSistemasComponent } from './pages/pregrado/ing-sistemas/ing-sistemas.component';
import { DoctoradoEducacionComponent } from './pages/posgrado/doctorado-educacion/doctorado-educacion.component';
import { EspecializacionPedagogiaComponent } from './pages/posgrado/especializacion-pedagogia/especializacion-pedagogia.component';
import { EspecializacionEdumaticaComponent } from './pages/posgrado/especializacion-edumatica/especializacion-edumatica.component';
import { EspecializacionPsicologiaClinicaComponent } from './pages/posgrado/especializacion-psicologia-clinica/especializacion-psicologia-clinica.component';
import { EspecializacionPsicologiaPsicosocialComponent } from './pages/posgrado/especializacion-psicologia-psicosocial/especializacion-psicologia-psicosocial.component';
import { EspecializacionGestionHumanaComponent } from './pages/posgrado/especializacion-gestion-humana/especializacion-gestion-humana.component';
import { MaestriaArquitecturaUrbanismoComponent } from './pages/posgrado/maestria-arquitectura-urbanismo/maestria-arquitectura-urbanismo.component';
import { MaestriaInnovacionComponent } from './pages/posgrado/maestria-innovacion/maestria-innovacion.component';
import { MaestriaFinanzasComponent } from './pages/posgrado/maestria-finanzas/maestria-finanzas.component';
import { EspecializacionCiberasesoriaFinancieraComponent } from './pages/posgrado/especializacion-ciberasesoria-financiera/especializacion-ciberasesoria-financiera.component';
import { EspecializacionFinanzasComponent } from './pages/posgrado/especializacion-finanzas/especializacion-finanzas.component';
import { MaestriaEstudiosCulturalesComponent } from './pages/posgrado/maestria-estudios-culturales/maestria-estudios-culturales.component';
import { MaestriaMemoriaYEscenariosTransicionalesComponent } from './pages/posgrado/maestria-memoria-y-escenarios-transicionales/maestria-memoria-y-escenarios-transicionales.component';
import { MaestriaPedagogiaYDesarrolloHumanoComponent } from './pages/posgrado/maestria-pedagogia-y-desarrollo-humano/maestria-pedagogia-y-desarrollo-humano.component';
import { EpecializacionGestionConstruccionSostenibleComponent } from './pages/posgrado/epecializacion-gestion-construccion-sostenible/epecializacion-gestion-construccion-sostenible.component';
import { EpecializacionArquitecturaBioclimaticaComponent } from './pages/posgrado/epecializacion-arquitectura-bioclimatica/epecializacion-arquitectura-bioclimatica.component';
import { EspecializacionDesarrolloSoftwareComponent } from './pages/posgrado/especializacion-desarrollo-software/especializacion-desarrollo-software.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PsicologiaComponent,
    LayoutComponent,
    ExpUnicaComponent,
    CarouselVideosComponent,
    LiveChatComponent,
    CarouselFotosComponent,
    RedesSocialesComponent,
    MapaComponent,
    DisenoIndustrialComponent,
    SafeInsertionPipe,
    MenuUnoComponent,
    XpComponent,
    PromoComponent,
    MenuDosComponent,
    PromoComponent,
    StandComponent,
    MenuStandComponent,
    formStands,
    ArquitecturaComponent,
    ComunicacionSocialComponent,
    AdministracionEmpresaComponent,
    MercadeoComponent,
    TecnologiaMercadeoComponent,
    NegociosInternacionalesComponent,
    IngIndustrialComponent,
    IngSistemasComponent,
    DoctoradoEducacionComponent,
    EspecializacionPedagogiaComponent,
    EspecializacionEdumaticaComponent,
    EspecializacionPsicologiaClinicaComponent,
    EspecializacionPsicologiaPsicosocialComponent,
    EspecializacionGestionHumanaComponent,
    MaestriaArquitecturaUrbanismoComponent,
    MaestriaInnovacionComponent,
    MaestriaFinanzasComponent,
    EspecializacionCiberasesoriaFinancieraComponent,
    EspecializacionFinanzasComponent,
    MaestriaEstudiosCulturalesComponent,
    MaestriaMemoriaYEscenariosTransicionalesComponent,
    MaestriaPedagogiaYDesarrolloHumanoComponent,
    EpecializacionGestionConstruccionSostenibleComponent,
    EpecializacionArquitecturaBioclimaticaComponent,
    EspecializacionDesarrolloSoftwareComponent
  ],
  entryComponents: [CarouselVideosComponent, CarouselFotosComponent, PromoComponent, formStands],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxUsefulSwiperModule
  ],
  exports: [MatDialogModule, NgxUsefulSwiperModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
