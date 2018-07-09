import { trigger, transition, style, animate, query, stagger } from "@angular/animations";

export const commentPopTrigger = trigger('commentPop', [
  transition(':enter', [
    query('comment', [
      style({
        height: 0,
        opacity: 0,
        transform: 'scale(1.1)'
      }),
      stagger('400ms', [
        animate('200ms ease-out', style({
          height: '*'
        })),
        animate('200ms ease-out')
      ])
    ], { optional: true })
  ]),
  transition(':leave', [
    query('comment', [
      style({
        height: '*',
        opacity: 1,
        transform: 'scale(1)'
      }),
      animate('200ms ease-in', style({
        opacity: 0,
        transform: 'scale(0)'
      })),
      animate('200ms', style({
        height: 0
      }))
    ], { optional: true })
  ])
]);