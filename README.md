#site personnel destiné à présenter mes travaux => http://julien-verhaeghe.fr

## How to install

To get everything working you can simply clone the project and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone JVPortfolio

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/jverhaeghe/JVPortfolio.git
cd JVPortfolio
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Now, you just have to enter
```
gulp
```
inside a the terminal and launch a browser with the url : http://localhost:8000