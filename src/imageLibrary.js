export let images = ["start", "hangman_1", "hangman_2", "hangman_3", "hangman_4", "hangman_5", "hangman_6", "hangman_7", "hangman_8", "hangman_9", "hangman_10", "game_over", "heart"]

export class ImageLibrary {

  constructor(game) {
    this.game = game
  }

  updatedImage(wrongGuesses) {
    if (this.game.isGuessedWord()) {
      return this.winningImage()
    } else {
      return this.correspondingImageforWrongGuessIn(wrongGuesses)
    }
  }

  winningImage() {
    return images[12]
  }

  correspondingImageforWrongGuessIn(wrongGuesses) {
    return images[wrongGuesses.length]
  }
}

