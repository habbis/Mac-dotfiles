alias ls='ls -al'
alias dirs='dirs -v'
# This chagnes the look of the bash command line.
export PS1="___________________    | \w @ \h (\u) \n| => "
export PS2="| => " 
# My custom alias
#alias vim='nvim'
alias pud='pushd'
alias pop='popd'
alias vim='nvim'

#"java.home": /Library/Java/JavaVirtualMachines

export JAVA_HOME=$(/usr/libexec/java_home)
