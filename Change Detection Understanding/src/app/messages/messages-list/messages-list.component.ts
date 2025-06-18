import { Component, ChangeDetectionStrategy, inject} from '@angular/core';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);

  messages = this.messagesService.allMessages
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}


// import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef, OnInit, DestroyRef } from '@angular/core';
// import { MessagesService } from '../messages.service';

// @Component({
//   selector: 'app-messages-list',
//   standalone: true,
//   templateUrl: './messages-list.component.html',
//   styleUrl: './messages-list.component.css',
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class MessagesListComponent implements OnInit{
//   ngOnInit(): void {
//     const subscription = this.messagesService.messages$.subscribe((messages) => {
//       this.messages = messages;
//       this.cdRef.markForCheck();
//     });
//     this.destroyRef.onDestroy(() => {
//       subscription.unsubscribe();
//     });
//   };
//   private destroyRef = inject(DestroyRef)
//   private messagesService = inject(MessagesService);
//   private cdRef = inject(ChangeDetectorRef)
//   messages: string[] = [];
//   get debugOutput() {
//     console.log('[MessagesList] "debugOutput" binding re-evaluated.');
//     return 'MessagesList Component Debug Output';
//   }
// }

