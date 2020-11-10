
import { ModuleWithProviders } from '@angular/core';
// importación de ruta
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { XpComponent } from './layout/xp/xp.component';
import { StandComponent } from './layout/stand/stand.component';

import { CanchaComponent } from './pages/cancha/cancha.component';
import { ZonaverdePeatonalComponent } from './pages/zonaverde-peatonal/zonaverde-peatonal.component';
import { CorredorPrincipalComponent } from './pages/corredor-principal/corredor-principal.component';
import { HomeComponent } from './pages/home/home.component';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { CapillaComponent } from './pages/capilla/capilla.component';
import { MercadeoMatriculasComponent } from './pages/mercadeo-matriculas/mercadeo-matriculas.component';
import { DisenoAudiovisualComponent } from './pages/pregrado/diseno-audiovisual/diseno-audiovisual.component';
import { TecDesarrolloSoftwareComponent } from './pages/pregrado/tec-desarrollo-software/tec-desarrollo-software.component';
import { LerComponent } from './pages/pregrado/ler/ler.component';
import { PsicologiaComponent } from './pages/pregrado/psicologia/psicologia.component';
import { ExpUnicaComponent } from './pages/exp-unica/exp-unica.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { DisenoIndustrialComponent } from './pages/pregrado/diseno-industrial/diseno-industrial.component';
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

// variable que contiene todas las rutas
const appRoutes: Routes = [

	//path: la ruta que queremos configurar; component: compoenente asociado a la ruta
	{path: '', component: HomeComponent},
	{path: 'cancha', component: CanchaComponent},
	{path: 'peatonal-zonaverde', component: ZonaverdePeatonalComponent},
	{path: 'corredor-principal', component: CorredorPrincipalComponent},
	{path: 'entrada', component: EntradaComponent},
	{path: 'capilla', component: CapillaComponent},
	{path: 'mercadeo-matriculas', component: MercadeoMatriculasComponent},
	{ 
		path: '', 
		component: XpComponent,
		children: [
			{path: 'experiencia-unica', component: ExpUnicaComponent},
			
		]
	},
	{ 
		path: '', 
			component: LayoutComponent,
		children: [
			{path: 'mapa-expo', component: MapaComponent}
		]
	},
	{
		path: '',
		component: StandComponent,
		children: [
			{path: 'pregrado/diseno-audiovisual', component: DisenoAudiovisualComponent},
			{path: 'pregrado/tec-desarrollo-software', component: TecDesarrolloSoftwareComponent},
			{path: 'pregrado/ler', component: LerComponent},
			{path: 'pregrado/psicologia', component: PsicologiaComponent},
			{path: 'pregrado/diseno-industrial', component: DisenoIndustrialComponent},
			{path: 'pregrado/arquitectura', component: ArquitecturaComponent},
			{path: 'pregrado/comunicacion-social-periodismo', component: ComunicacionSocialComponent},
			{path: 'pregrado/administracion-empresa', component: AdministracionEmpresaComponent},
			{path: 'pregrado/mercadeo', component: MercadeoComponent},
			{path: 'pregrado/tecnologia-mercadeo', component: TecnologiaMercadeoComponent},
			{path: 'pregrado/negocios-internacionales', component: NegociosInternacionalesComponent},
			{path: 'pregrado/ingenieria-industrial', component: IngIndustrialComponent},
			{path: 'pregrado/ingenieria-sistemas-telecomunicaciones', component: IngSistemasComponent},
			//{path: 'posgrado/doctorado-educacion', component: DoctoradoEducacionComponent},
			{path: 'posgrado/especializacion-pedagogia', component: EspecializacionPedagogiaComponent},
			{path: 'posgrado/especializacion-edumatica', component: EspecializacionEdumaticaComponent},
			{path: 'posgrado/especializacion-psicologia-clinica', component: EspecializacionPsicologiaClinicaComponent},
			{path: 'posgrado/especializacion-psicologia-psicosocial', component: EspecializacionPsicologiaPsicosocialComponent},
			{path: 'posgrado/especializacion-gestion-humana', component: EspecializacionGestionHumanaComponent},
			// ya
			{path: 'posgrado/maestria-arquitectura-urbanismo', component: MaestriaArquitecturaUrbanismoComponent},
			{path: 'posgrado/maestria-innovacion', component: MaestriaInnovacionComponent},
			{path: 'posgrado/maestria-finanzas', component: MaestriaFinanzasComponent},
			{path: 'posgrado/especializacion-ciberasesoria-financiera', component: EspecializacionCiberasesoriaFinancieraComponent},
			{path: 'posgrado/especializacion-finanzas', component: EspecializacionFinanzasComponent},
			{path: 'posgrado/maestria-estudios-culturales', component:MaestriaEstudiosCulturalesComponent},
			{path: 'posgrado/maestria-memoria-y-escenarios-transicionales', component: MaestriaMemoriaYEscenariosTransicionalesComponent},
			{path: 'posgrado/maestria-pedagogia-y-desarrollo-humano', component: MaestriaPedagogiaYDesarrolloHumanoComponent},
			{path: 'posgrado/epecializacion-gestion-construccion-sostenible', component: EpecializacionGestionConstruccionSostenibleComponent},
			{path: 'posgrado/epecializacion-arquitectura-bioclimatica', component: EpecializacionArquitecturaBioclimaticaComponent},
			{path: 'posgrado/especializacion-desarrollo-software', component: EspecializacionDesarrolloSoftwareComponent}
		]
	},

	{path: '**', component: HomeComponent},
	
];



export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
	onSameUrlNavigation: 'reload',
  	scrollPositionRestoration: 'enabled',
  	anchorScrolling: 'enabled',
});