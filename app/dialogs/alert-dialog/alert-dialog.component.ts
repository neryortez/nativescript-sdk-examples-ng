import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import dialogs = require("ui/dialogs");

@Component({
    selector: 'alert-dialog-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'dialogs/alert-dialog/alert-dialog.component.html'
})

export class AlertDialogComponent {
     displayAlertDialog() {
        // >> alert-dialog-code
        var options = {
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        };
        dialogs.alert(options).then(() => {
            console.log("Race chosen!");
        });
        // << alert-dialog-code
    }
}