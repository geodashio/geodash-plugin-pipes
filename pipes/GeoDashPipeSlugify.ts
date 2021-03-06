declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'slugify'})
export class GeoDashPipeSlugify implements PipeTransform {
  transform(value: any): any {

    if(geodash.util.isString(value))
    {
      return value.toLowerCase().replace(new RegExp("(\\s|[-]|[=]|[\\(]|[\\)])", 'gi'), "_");
    }
    else
    {
      return "";
    }
  }
}
