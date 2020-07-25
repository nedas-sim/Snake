class Snake {
	constructor(x,y) {		
		this.blocks = [];
		this.blocks.push(new Tile(x,y));
		this.blocks.push(new Tile(x+1,y));
		
		this.dir = "RIGHT";
	}
	
	show(r,g,b) {
		fill(r,g,b,255);
				
		for(let i = 0; i < this.blocks.length; i++) {
			
			/*if(i == this.blocks.length - 1)
				fill(0, 255, 0);
			*/
			
			rect(this.blocks[i].x * step, 
				 this.blocks[i].y * step,
				 step,
				 step);
		}
	}
	
	move() {
		if(this.blocks.length > 1) {
			for(let i = 0; i < this.blocks.length - 1; i++) {
				let x1 = this.blocks[i].x;
				let y1 = this.blocks[i].y;
				let x2 = this.blocks[i+1].x;
				let y2 = this.blocks[i+1].y;
				
				this.blocks[i].change(x2,y2);
				this.blocks[i+1].change(x1,y1);
			}
			
			this.blocks[this.blocks.length - 1]
				.change(this.blocks[this.blocks.length - 2].x,
						this.blocks[this.blocks.length - 2].y);
						
			
		}
		
		if(this.dir == "LEFT")
			this.blocks[this.blocks.length - 1].x--;
		if(this.dir == "RIGHT")
			this.blocks[this.blocks.length - 1].x++;
		if(this.dir == "UP")
			this.blocks[this.blocks.length - 1].y--;
		if(this.dir == "DOWN")
			this.blocks[this.blocks.length - 1].y++;
		
		if(this.blocks[this.blocks.length - 1].x < 0)
			this.blocks[this.blocks.length - 1].x = cols - 1;
		if(this.blocks[this.blocks.length - 1].x >= cols)
			this.blocks[this.blocks.length - 1].x = 0;
		if(this.blocks[this.blocks.length - 1].y < 0)
			this.blocks[this.blocks.length - 1].y = rows - 1;
		if(this.blocks[this.blocks.length - 1].y >= rows)
			this.blocks[this.blocks.length - 1].y = 0;
	}
	
	enlarge() {
		
		let head = this.blocks[this.blocks.length - 1];
		let newTile = new Tile(0,0);
		
		if(this.dir == "LEFT")
			newTile.change(head.x-1, head.y);
		if(this.dir == "RIGHT")
			newTile.change(head.x+1, head.y);
		if(this.dir == "UP")
			newTile.change(head.x, head.y+1);
		if(this.dir == "DOWN")
			newTile.change(head.x, head.y-1);
		
		this.blocks.push(newTile);
		
	}
	
	changeDir(dir) {
		
		if(this.dir == "LEFT" && dir == "RIGHT" ||
		   this.dir == "RIGHT" && dir == "LEFT" ||
		   this.dir == "UP" && dir == "DOWN" ||
		   this.dir == "DOWN" && dir == "UP") {}
		else
			this.dir = dir;
		
	}
	
	eats(food) {
		let head = this.blocks[this.blocks.length - 1];
		return (head.x == food.x && head.y == food.y);
	}
	
	isGameOver() {
		let head = this.blocks[this.blocks.length - 1];
		for(let i = 0; i < this.blocks.length - 3; i++) {
			if(this.blocks[i].x == head.x &&
			   this.blocks[i].y == head.y)
			   return true;
		}
		return false;
	}
}