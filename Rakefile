# logger

library           = "logger.js"
library_min       = "logger.min.js"
dir_src           = "src/"
# dir_doc           = "docs/"
# dir_jsdoc         = "tools/jsdoc-toolkit/"
dir_yuicompressor = "tools/yuicompressor/"

yuicompressor = "java -jar #{dir_yuicompressor}/build/yuicompressor-2.4.7.jar #{library} -o #{library_min}"
# jsdoc = "java -jar #{dir_jsdoc}jsrun.jar #{dir_jsdoc}app/run.js #{library} -d=#{dir_doc} -a -t=#{dir_jsdoc}templates/jsdoc -p #{dir_src} -q"

# ukrywamy wszelkie logi
verbose(false)

# glowny plik biblioteki
if File.exists?(library)
  File.delete(library)
end
File.new(library, File::CREAT|File::TRUNC|File::RDWR, 0777)

# plik zminifajowany
if File.exists?(library_min)
  File.delete(library_min)
end
File.new(library_min, File::CREAT|File::TRUNC|File::RDWR, 0777)

# katalog z dokumentacją
# if File.directory?(dir_doc)
#   FileUtils.rm_r dir_doc, :force => true
# end
# Dir.mkdir(dir_doc)

task :default

sh "clear"

puts "------------- node-plain-text-logger for Web -------------"

print "(1) Generate library:"

files = ["logger-core.js", "logger-dom.js", "logger-js.js", "parser/dom-parser.js", "parser/js-parser.js"]

lib_data = File.read(library)

File.open(library, 'w') do |f|
  for file in files
    f.write File.read("#{dir_src}#{file}")
    f.write lib_data
  end
end

puts "\t\t\t\tDone."

print "(2) Minifing:"
sh yuicompressor

lib_data = File.read(library_min)

File.open(library_min, 'w') do |f|
  f.write "/** node-text-plain-logger for Web | https://github.com/piecioshka/node-text-plain-logger **/\n"
  f.write lib_data
end

puts "\t\t\t\t\tDone."

# print "[+] Generate documentation:"
# sh jsdoc
# puts "\t\t\tDone."

puts "\n"