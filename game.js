// Simple implementation of a linked list based Snake game in JavaScript

class SnakeNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.next = null;
    }
}

class Snake {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a new segment to the snake
    addSegment(x, y) {
        const newSegment = new SnakeNode(x, y);
        if (this.length === 0) {
            this.head = newSegment;
            this.tail = newSegment;
        } else {
            this.tail.next = newSegment;
            this.tail = newSegment;
        }
        this.length++;
    }

    // Move the snake
    move(newX, newY) {
        const oldHead = this.head;
        this.head = new SnakeNode(newX, newY);
        this.head.next = oldHead;
        // If needed, remove the tail segment to keep the length
        if (this.length > 1) {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
    }

    // Print snake's segments
    printSnake() {
        let current = this.head;
        while (current) {
            console.log(`Segment at (${current.x}, ${current.y})`);
            current = current.next;
        }
    }
}

// Example usage of Snake class
document.addEventListener('DOMContentLoaded', () => {
    const snake = new Snake();
    snake.addSegment(5, 5);
    snake.addSegment(5, 6);
    snake.move(5, 7);
    snake.printSnake();
});

// Additional game logic like food generation, drawing on canvas, and controls can be implemented based on this structure.
