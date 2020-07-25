class Food {
	constructor(snake) {
		this.change(snake);		
	}
	
	change(snake) {
		
		while(true) {
			let x = floor(random(0, cols));
			let y = floor(random(0, rows));
			
			let allow = true;
			
			for(let i = 0; i < snake.blocks.length; i++) {
				if(snake.blocks[i].x == x &&
				   snake.blocks[i].y == y) {
					   allow = false;
					   break;
				   }
			}
			
			if(allow) {
				this.x = x;
				this.y = y;
				break;
			}
		}
		
	}
	
	show() {
		fill(20, 220, 20);
		rect(this.x * step, 
			 this.y * step,
			 step,
			 step);
	}
	
	
	
	
}