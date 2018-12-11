import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breadcrumb'
})
export class BreadcrumbPipe implements PipeTransform {

  transform(value: string): string {
    return value.substr(1).replace(/\//m, '-');
  }

}
