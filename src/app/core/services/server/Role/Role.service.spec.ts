/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RoleService } from './Role.service';

describe('Service: Role', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleService]
    });
  });

  it('should ...', inject([RoleService], (service: RoleService) => {
    expect(service).toBeTruthy();
  }));
});
