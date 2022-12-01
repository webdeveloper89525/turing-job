import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'companySize',
    pure: true
})
export class CompanySizePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            if (value < 11) {
                return "1-10";
            } else if (value < 51) {
                return "11-50";
            } else if (value < 251) {
                return "51-250";
            } else if (value < 10001) {
                return "251-10k";
            } else {
                return "10k-"
            }
        }
        return value;
    }
}