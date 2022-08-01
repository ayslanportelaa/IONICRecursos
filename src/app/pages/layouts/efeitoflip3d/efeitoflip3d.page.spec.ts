import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Efeitoflip3dPage } from './efeitoflip3d.page';

describe('Efeitoflip3dPage', () => {
  let component: Efeitoflip3dPage;
  let fixture: ComponentFixture<Efeitoflip3dPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Efeitoflip3dPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Efeitoflip3dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
