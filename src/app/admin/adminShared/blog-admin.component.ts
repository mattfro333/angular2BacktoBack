import { Component, OnInit } from '@angular/core';
import { UserService } from '../adminShared/user.service'}
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { BlogAdminService } from '../adminShared/blog-admin.service';
import { Blog } from '../adminShared/blog';

@Component({
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./bolgadmin.component.css']
})

export class BlogAdminComponent implements OnInit {
  theUser: string;
  menuChoice: string;
  blogPosts: Blog[];

  constructor(
      private userSVC: UserService,
      private router: Router,
      private blogAdminSVC: BlogAdminService
  ){}
  
}
