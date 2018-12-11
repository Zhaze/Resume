import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breadcrumb'
})
export class BreadcrumbPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\//m, '').replace(/\//g, ' - ');
  }

}
