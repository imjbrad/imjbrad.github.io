gulp build
git add dist && git commit -m "GH Deployment"
git subtree push --prefix dist origin master
