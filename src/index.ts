import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

const o = range(0, 100).pipe(filter(number => number > 50));


o.subscribe({
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})