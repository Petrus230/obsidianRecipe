import { Plugin } from "obsidian";
import { Recipe } from "./src/recepe";
import { rawTable } from "./src/tablaAlimentos";
import { Food, readFoodsFromCsv } from "./src/foods";

export default class ExamplePlugin extends Plugin {
	statusBarElement: HTMLSpanElement;
	foods: { [name: string]: Food }

	onload() {
		this.foods = readFoodsFromCsv(rawTable)

		this.statusBarElement = this.addStatusBarItem().createEl("span");
		this.readActiveFileAndUpdateLineCount();

		this.app.workspace.on("editor-change", (editor) => {
			this.statusBarElement.textContent = ``;

		});

		this.app.workspace.on("active-leaf-change", () => {
			this.readActiveFileAndUpdateLineCount();
		});
	}

	onunload() {
		this.statusBarElement.remove();
	}

	private async readActiveFileAndUpdateLineCount() {
		const file = this.app.workspace.getActiveFile();
		if (file) {

			const content = await this.app.vault.read(file);
			const recipe = Recipe.read(content, this.foods)
			console.log(recipe)
			const calories = recipe.totalCalories()

			this.statusBarElement.textContent = `Calories ${calories}`;


		} else {
			this.statusBarElement.textContent = ``;
		}
	}
}