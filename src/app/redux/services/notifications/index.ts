import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {
  @Output() languageChanged: EventEmitter<any> = new EventEmitter();
  @Output() workspaceChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  changeLanguage(langCode) {
    this.languageChanged.emit(langCode);
  }

  info(message: string = 'COMMON.INFO'): void {
  }

  success(message: string = 'COMMON.SUCCESS'): void {
  }

  warning(message: string = 'COMMON.WARNING'): void {
  }

  error(message: string = 'COMMON.ERROR'): void {
  }

  private _show(type: string, message: string): void {
  }
}
