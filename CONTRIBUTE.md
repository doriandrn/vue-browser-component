# Contributions Guide

This is a __step by step__ guide on how to bring in a contribution / improvement to this component.

1. Fork this repository

2. Clone the fresh forked repo to a local dir:

  ```sh
  git clone https://github.com/[YOUR_GITHUB_USERNAME]/vue-browser-component.git
  ```

3. Navigate into the new created directory by git clone

  ```sh
  cd vue-browser-component
  ```

4. Switch to a new branch for the feature/update you want to bring in

  ```sh
  git checkout -b [MY_BROWSER_FEATURE]
  ```

5. Install dependencies

  ```sh
  yarn install
  ```

6. __Run dev server__ (Develop!)

  ```sh
  yarn dev
  ```

7. __Build__

  ```sh
  yarn build
  ```

  You shall ensure no errors happen at this step! :)

8. Commit and push your changes

  ```sh
  git commit -am '[COMMIT_MESSAGE]'
  git push origin [BRANCH_NAME]
  ```

9. Submit a __pull request__
