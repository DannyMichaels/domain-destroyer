import { Sprite } from "./interfaces";

export class ParticleRenderer implements Sprite {
  spawn: Function;
  viewFrame: HTMLDivElement;
  spriteRenderer: HTMLDivElement;
  game;
  constructor(game) {
    // returns the elements to render a particle
    this.spawn = () => {
      // create the sprite view frame
      this.viewFrame = document.createElement("div");
      this.viewFrame.id = "destroyer-particle-sprite-view-frame";
      this.viewFrame.className = `destroyer-sprite particle-sprite-view-frame`;
      this.viewFrame.style.zIndex = `${game.zIndStart + 1}`;
      this.viewFrame.style.top = `${
        game.mousePos.y - 75 + game.currentWeapon.particleOffset
      }px`;
      this.viewFrame.style.left = `${
        game.mousePos.x - 75 + game.currentWeapon.particleOffset
      }px`;

      // create the spritesheet renderer
      this.spriteRenderer = document.createElement("div");
      this.spriteRenderer.id = "destroyer-particle-spriteRenderer";
      this.spriteRenderer.className = `destroyer-sprite particle-sprite-renderer`;
      this.spriteRenderer.style.backgroundImage = `url(${
        game.currentWeapon.sprites.particle[
          Math.floor(Math.random() * game.currentWeapon.sprites.particle.length)
        ]
      })`;
      this.spriteRenderer.style.zIndex = `${game.zIndStart + 2}`;

      // pack the renderer into the view frame
      this.viewFrame.appendChild(this.spriteRenderer);
      return this.viewFrame;
    };
  }
}

export default ParticleRenderer;
