


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `  <div id='container'>
                        <!-- declaration of sidebar element -->
                        <div id="wrapper">
                            <!--Sidebar element declaration -->
                            <ejs-sidebar id="default-sidebar" #sidebar [width]='width' (created)="onCreated($event)" style="visibility: hidden" >
                                    <div class="sidebar-header header-cover" style="background-color:#0378d5">
                                            <div class="image-container">
                                                <div class="sidebar-image">
                                                </div>
                                            </div>
                                            <div style="padding: 0 0 5px 0;">
                                                <a class="sidebar-brand" href="#settings-dropdown">
                                                    john.doe@gmail.com
                                                </a>
                                                <span class="sf-icon-down icon"></span>
                                            </div>
                                        </div>

                                        <!-- Sidebar navigation -->
                                        <ul class="nav sidebar-nav">
                                            <li>
                                                <a href="#">
                                                    <i class="sf-icon-sidebar sf-icon-file"></i>
                                                    <span class="e-text"> Inbox</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="sf-icon-sidebar sf-icon-starred"></i>
                                                    <span class="e-text"> Starred</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="sf-icon-sidebar sf-icon-recent"></i>
                                                    <span class="e-text">Snoozed</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="sf-icon-sidebar sf-icon-important"></i>
                                                    <span class="e-text">Important</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="sf-icon-sidebar sf-icon-offline"></i>
                                                    <span class="e-text"> Sent</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="sf-icon-sidebar sf-icon-backup"></i>
                                                    <span class="e-text"> Draft</span>
                                                </a>
                                            </li>
                                        </ul>
                            </ejs-sidebar>
                            <!-- main content declaration -->
                            <div>
                                    <div class="content">
                                        <div id="left">
                                            <span id="hamburger" class="e-icons menu default" (click)="openClick()"></span>
                                        </div>
                                        <div id="center">
                                            <span>Inbox</span>
                                        </div>
                                        <div id="right">
                                            <span class="sf-icon-search"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="e-control e-listview e-list-template e-touch">
                                            <ul class="e-list-parent e-ul ">
                                                <li class="e-list-group-item e-level-1" role="group" data-uid="group-list-item-Today"
                                                    aria-level="1">
                                                    <div class="e-text-content" role="presentation"><span class style="width: 100%; margin-left: 2%; margin-top: -2%;">Today</span></div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">Albert Lives</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Opening for Sales Manager</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Hello Uta Morgan,</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">
                                                                Ila Russo</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Business dinner invitation
                                                        </span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Hello Jelani Moreno,</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">
                                                                Garth Owen</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Application for Job Title</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Hello Ila Russo,</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">Ursula Patterson</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Hello Kerry Best,</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Programmer Position Application</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">
                                                                Nichole Rivas</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Annual Conference</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Hi Igor Mccoy,</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">
                                                                Nichole Rivas</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Annual Conference</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Hi Igor Mccoy,</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">
                                                                Nichole Rivas</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Annual Conference</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Hi Igor Mccoy,</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">
                                                                Nichole Rivas</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Annual Conference</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Hi Igor Mccoy,</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">
                                                                Nichole Rivas</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Annual Conference</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Hi Igor Mccoy,</span></span>
                                                    </div>
                                                </li>
                                                <li class="e-list-item">
                                                    <div class="e-list-wrapper e-list-avatar e-list-multi-line">
                                                        <span class="e-avatar e-icon sf-icon-profile"></span>
                                                        <div>
                                                            <span class="e-list-item-header e-name">Ursula Patterson</span>
                                                        </div>
                                                        <span class="received e-list-content e-second-heading">Hello Kerry Best,</span>
                                                        <span class="e-list-item-header sf-icon-star">
                                                            <span class="e-list-text">Programmer Position Application</span></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!--end of main content declaration -->
                        </div>
                    </div>`
})
export class AppComponent {
    @ViewChild('sidebar')
    public sidebar?: SidebarComponent;
    public width: string = '290px';
    public onCreated(args: any) {
        (this.sidebar as SidebarComponent).element.style.visibility = '';
    }
    openClick(): void {
        this.sidebar?.toggle();
    }

}




