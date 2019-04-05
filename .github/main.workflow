workflow "Build on push" {
  resolves = ["Build"]
  on = "push"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run build"
}

workflow "Publish on release" {
  on = "release"
  resolves = ["Publish"]
}

action "pre-publish: Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "pre-publish: Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["pre-publish: Install"]
  args = "run build"
}

action "Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["pre-publish: Build"]
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
