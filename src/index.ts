import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

forkJoin(
    {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        users: ajax.getJSON('https://api.github.com/users')
    }
)
    .subscribe(console.log);


const data$ = ajax.getJSON('https://api.github.com/search/repositories?q=rxjs');

data$.subscribe((value) => console.log('data$ value', value));

const dataGitLab$ = ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs');

dataGitLab$.subscribe((value) => console.log('dataGitLab$ value', value));


