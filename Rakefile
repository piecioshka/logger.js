# check gem loaded
%w(rainbow uglifier yui/compressor).each{ |gem_name|
  begin
    require gem_name
  rescue LoadError
    puts "Ruby Gem: #{gem_name} is required"
    exit
  end
}

LIBRARY = "logger.js"
LIBRARY_MIN = "logger.min.js"
DIR_SRC = "src/"

# ukrywamy wszelkie logi
verbose(false)

# glowny plik biblioteki
if File.exists?(LIBRARY)
  File.delete(LIBRARY)
end
File.new(LIBRARY, File::CREAT|File::TRUNC|File::RDWR, 0777)

# plik zminifajowany
if File.exists?(LIBRARY_MIN)
  File.delete(LIBRARY_MIN)
end
File.new(LIBRARY_MIN, File::CREAT|File::TRUNC|File::RDWR, 0777)

def compress_js(file_content)
  # compress by Uglifier
  Uglifier.new(:output => {:comments => :none}).compile(file_content)
end

puts "\nStart building master files...".foreground(:magenta)

task :default => [:build, :compress] do
  print "Finished!\n".foreground(:green)
end

task :build => [] do
  print "* Building... ".foreground(:yellow)

  files = ['logger-core.js', 'logger-dom.js', 'logger-js.js', 'parser/dom-parser.js', 'parser/js-parser.js']

  lib_data = File.read(LIBRARY)

  File.open(LIBRARY, 'w') do |f|
    for file in files
      f.write File.read("#{DIR_SRC}#{file}")
      f.write lib_data
    end
  end

  puts 'done!'
end

task :compress => [] do
  print "* Compress... ".foreground(:cyan)

  File.open(LIBRARY_MIN, 'w') do |f|
    f.write "/** logger | https://github.com/piecioshka/logger **/\n"
    f.write compress_js(File.read(LIBRARY))
  end

  puts 'done!'
end