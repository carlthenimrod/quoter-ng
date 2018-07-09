import { trigger, transition, style, animate, query, stagger } from "@angular/animations";

export const commentStaggerTrigger = trigger('commentStagger', [
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
  ])
]);

export const commentToggleTrigger = trigger('commentToggle', [
  transition(':enter', [
    style({
      height: 0,
      opacity: 0,
      transform: 'scale(1.1)'
    }),
    animate('200ms ease-out', style({
      height: '*'
    })),
    animate('200ms ease-out')
  ])
]);

export const commentFormToggleTrigger = trigger('commentFormToggle', [
  transition(':enter', [
    query('comment-form', [
      style({
        height: 0,
        opacity: 0,
        transform: 'scale(1.1)'
      }),
      animate('200ms ease-out', style({
        height: '*'
      })),
      animate('200ms ease-out')
    ], { optional: true })
  ]),
  transition(':leave', [
    query('comment-form', [
      style({
        height: '*',
        opacity: 1
      }),
      animate('200ms', style({
        opacity: 0
      })),
      animate('200ms', style({
        height: 0
      }))
    ], { optional: true })
  ])
]);