import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes!: Recipe[];

  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }
  navigateToDetail(recipeId: string) {
    this.router.navigate(['/recipes', recipeId]);
  }
}
