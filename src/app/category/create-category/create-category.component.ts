import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category: Category = {
    id: 0,
    name: ''
  };

  constructor(private categoryService: CategoryService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  submit() {
    this.categoryService.create(this.category).subscribe(() => {
      this.notificationService.showSuccessMessage('Thành công');
    }, () => {
      this.notificationService.showErrorMessage('Lỗi');
    });
  }

}
