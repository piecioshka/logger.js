# check gem loaded
%w(rainbow uglifier).each{ |gem_name|
  begin
    require gem_name
  rescue LoadError
    puts "Ruby Gem: #{gem_name} is required"
    exit
  end
}

LIBRARY_PATH = 'logger.js'
LIBRARY_MIN_PATH = 'logger.min.js'
SOURCE_DIRECTORY = 'src/'

verbose(false)

def create_file(file)
  if File.exists?(file)
    File.delete(file)
  end
  File.new(file, File::CREAT|File::TRUNC|File::RDWR, 0777)
end

def its_ok
  puts "\t\t\t\t\t" + '['.foreground(:cyan) + ' ok '.foreground(:green) + ']'.foreground(:cyan)
end

def compress(path)
    compressed = Uglifier.new(:output => {:comments => :none}).compile(File.read(path))

    file = File.new(path, 'w')
    file.write(compressed)
    file.close
end

def build_lib
  files = %w(logger-core.js logger-dom.js logger-js.js parser/dom-parser.js parser/js-parser.js)

  lib_data = File.read(LIBRARY_PATH)

  File.open(LIBRARY_PATH, 'w') do |f|
    for file in files
      f.write File.read("#{SOURCE_DIRECTORY}#{file}")
      f.write lib_data
    end
  end

  its_ok()
end

def build_min_lib
  FileUtils.copy_file(LIBRARY_PATH, LIBRARY_MIN_PATH)

  compress(LIBRARY_MIN_PATH)

  lib_data = File.read(LIBRARY_MIN_PATH)

  File.open(LIBRARY_MIN_PATH, 'w') do |f|
    f.write "/** node-text-plain-logger for Web | https://github.com/piecioshka/node-text-plain-logger **/\n"
    f.write lib_data
  end

  its_ok()
end

desc 'Build libraries'
task :default => [] do
  create_file(LIBRARY_PATH)
  create_file(LIBRARY_MIN_PATH)

  puts '----------- node-plain-text-logger for Web -----------'.foreground(:yellow)

  print '*'.foreground(:green) + ' Build ...'

  build_lib()

  print '*'.foreground(:green) + ' Minifing ...'

  build_min_lib()
end