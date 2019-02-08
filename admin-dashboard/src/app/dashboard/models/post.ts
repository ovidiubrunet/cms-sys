
import { Variable } from './variable';

export class Post {
  id: number;
  name: string;
  url: string;
  variables: Variable[];
  postsCount: number;
  postTemplateId: number;
  postTemplateName: string;
  expireDate: string;
}
