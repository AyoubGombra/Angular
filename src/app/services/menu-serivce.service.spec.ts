import { TestBed } from '@angular/core/testing';

import { MenuSerivceService } from './menu-serivce.service';

describe('MenuSerivceService', () => {
  let service: MenuSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
