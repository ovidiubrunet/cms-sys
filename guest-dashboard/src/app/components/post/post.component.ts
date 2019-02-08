import { Component, OnInit} from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = 'guest-dashboard';
  isPostLoaded = false;
  post: string;

  constructor(
    private postService: PostService,
    private scriptService: ScriptService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const postName = this.route.snapshot.paramMap.get('postName');
    this.postService
      .getPost(postName)
      .subscribe(result => {
        this.post = result.template;
        this.isPostLoaded = true;


      this.scriptService.loadAssets(result.assets).then(data => {
          console.log('script loaded ', data);
      }).catch(error => console.log(error));

        this.scriptService.load('initializeAffix').then(data => {
          console.log('script loaded ', data);
      }).catch(error => console.log(error));
      });
  }
}
