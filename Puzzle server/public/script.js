const wordList = ['aaron', 'abaca', 'aback', 'abaft', 'abaht', 'aband', 'abase', 'abash', 'abask', 'abate', 'abide', 'abode', 'abort', 'about', 'abuse', 'abuzz', 'aches', 'achoo', 'acids', 'acidy', 'actor', 'acute', 'adapt', 'added', 'adieu', 'admin', 'admit', 'adobe', 'adopt', 'adorn', 'adult', 'affix', 'afoot', 'afoul', 'after', 'again', 'agent', 'aging', 'aglow', 'agony', 'agree', 'ahead', 'ahold', 'aided', 'aimed', 'aired', 'aisle', 'alarm', 'alert', 'alias', 'alien', 'alike', 'alive', 'allay', 'allot', 'alloy', 'aloft', 'alone', 'aloof', 'aloud', 'alpha', 'amaze', 'amber', 'amend', 'amino', 'amiss', 'among', 'amour', 'amuse', 'angel', 'anger', 'angle', 'anglo', 'angry', 'anime', 'ankle', 'annul', 'anvil', 'apart', 'apnea', 'apple', 'apply', 'apron', 'arbor', 'areas', 'arena', 'armed', 'armor', 'arose', 'array', 'arson', 'artsy', 'aside', 'asked', 'askew', 'asset', 'atoms', 'atone', 'audio', 'audit', 'aunty', 'avail', 'avert', 'avoid', 'await', 'awake', 'award', 'aware', 'awash', 'awful', 'awoke', 'babel', 'babes', 'backs', 'bacon', 'baddy', 'badge', 'badly', 'bagel', 'baggy', 'baked', 'baker', 'bakes', 'baler', 'balky', 'balls', 'balmy', 'bands', 'bandy', 'banks', 'bared', 'barks', 'barmy', 'baron', 'based', 'basic', 'basil', 'basin', 'batch', 'bates', 'baths', 'baton', 'batty', 'beach', 'beads', 'beady', 'beaky', 'beams', 'beamy', 'beans', 'beard', 'bears', 'beast', 'bebop', 'beech', 'beeps', 'beers', 'began', 'begin', 'begot', 'beige', 'belch', 'belle', 'bells', 'belly', 'below', 'belts', 'bench', 'bends', 'bendy', 'berth', 'beset', 'besot', 'bests', 'bibbs', 'bible', 'bicep', 'bides', 'bidet', 'biked', 'biker', 'bikes', 'bills', 'binds', 'binge', 'bingo', 'bipod', 'birch', 'birds', 'birth', 'bison', 'bites', 'black', 'blade', 'blame', 'bland', 'blank', 'blaze', 'bleak', 'bleed', 'bleep', 'blend', 'bless', 'blest', 'blimp', 'blind', 'bling', 'blink', 'bliss', 'bloat', 'block', 'bloke', 'blond', 'blood', 'bloom', 'blown', 'blows', 'blowy', 'blues', 'bluff', 'blunt', 'blurs', 'board', 'boast', 'boats', 'bogus', 'boils', 'bombs', 'boned', 'bones', 'books', 'boost', 'booth', 'booze', 'bored', 'borne', 'bound', 'bowel', 'bowls', 'boxed', 'boxer', 'boxes', 'brace', 'braid', 'brail', 'brain', 'brake', 'brand', 'brass', 'bravo', 'brawl', 'bread', 'break', 'breed', 'bribe', 'brick', 'bring', 'broad', 'broke', 'brown', 'brush', 'brute', 'budge', 'built', 'bully', 'bumpy', 'bunch', 'bunny', 'burns', 'burnt', 'bushy', 'butts', 'buyer', 'cabin', 'cable', 'cache', 'caddy', 'cadet', 'cains', 'caked', 'cakes', 'calve', 'camel', 'cameo', 'camps', 'canal', 'candy', 'canoe', 'canon', 'cards', 'cargo', 'carol', 'carry', 'carts', 'carve', 'cased', 'casts', 'catch', 'cause', 'caved', 'caves', 'cease', 'cedar', 'cello', 'cells', 'celts', 'cents', 'chain', 'chair', 'chalk', 'champ', 'chart', 'chase', 'cheap', 'cheat', 'check', 'cheek', 'cheer', 'chefs', 'chess', 'chest', 'chews', 'chewy', 'chick', 'chief', 'child', 'chime', 'chips', 'chirp', 'chive', 'choir', 'choke', 'chomp', 'chore', 'chuck', 'churn', 'chute', 'cider', 'cigar', 'claim', 'clasp', 'class', 'clean', 'cleat', 'cliff', 'climb', 'cloak', 'clock', 'clone', 'close', 'cloth', 'cloud', 'clout', 'clown', 'clubs', 'clues', 'coast', 'coded', 'coils', 'coins', 'colds', 'color', 'combo', 'comes', 'comfy', 'condo', 'cones', 'copes', 'coral', 'cords', 'corny', 'costs', 'couch', 'cough', 'could', 'count', 'cover', 'covid', 'cower', 'crabs', 'crack', 'craft', 'cramp', 'crane', 'crash', 'crawl', 'craze', 'crazy', 'cream', 'cribs', 'cried', 'cries', 'crime', 'crisp', 'croak', 'crock', 'crowd', 'crown', 'crude', 'crumb', 'cupid', 'cured', 'curly', 'curry', 'curve', 'curvy', 'cutch', 'cuter', 'cysts', 'daddy', 'daily', 'dairy', 'daisy', 'dance', 'dandy', 'darts', 'dated', 'dates', 'deals', 'dealt', 'death', 'debts', 'debut', 'decaf', 'decay', 'decks', 'decor', 'decoy', 'deeds', 'deems', 'deity', 'delay', 'delta', 'delve', 'demon', 'denim', 'dense', 'depth', 'derby', 'desks', 'deter', 'detox', 'devil', 'diary', 'diced', 'dices', 'diets', 'dingy', 'dirty', 'discs', 'ditch', 'ditto', 'ditty', 'dives', 'docks', 'dodge', 'doggy', 'doing', 'dolls', 'donor', 'doors', 'doped', 'doted', 'dotty', 'doubt', 'dough', 'douse', 'doves', 'downs', 'dowry', 'dozer', 'dozes', 'draft', 'drags', 'drain', 'drake', 'drama', 'drank', 'drape', 'drawl', 'drawn', 'draws', 'dread', 'dream', 'dress', 'dried', 'drier', 'drill', 'drink', 'drive', 'droid', 'drone', 'drool', 'drops', 'drove', 'drown', 'drugs', 'druid', 'drums', 'drunk', 'dryer', 'duals', 'ducts', 'dudes', 'duets', 'duked', 'dukes', 'dumps', 'dunce', 'dunes', 'duped', 'dusty', 'duvet', 'dwarf', 'dweeb', 'dwell', 'dying', 'eager', 'eagle', 'early', 'earns', 'earth', 'eased', 'easel', 'eaten', 'eater', 'ebony', 'edema', 'edges', 'edits', 'eight', 'eject', 'elate', 'elbow', 'elder', 'elect', 'elite', 'elope', 'elude', 'email', 'embed', 'ember', 'emend', 'emoji', 'emote', 'empty', 'enact', 'ended', 'enema', 'enemy', 'enjoy', 'enter', 'entry', 'equal', 'equip', 'erase', 'erect', 'erode', 'error', 'erupt', 'essay', 'ether', 'ethic', 'etude', 'euros', 'event', 'every', 'evils', 'exact', 'exams', 'excel', 'exile', 'exist', 'exits', 'expel', 'extra', 'fable', 'faced', 'faces', 'facet', 'facts', 'fades', 'fails', 'faint', 'fairs', 'fairy', 'fakes', 'falls', 'FALSE', 'famed', 'fancy', 'fangs', 'farce', 'farms', 'fatal', 'fated', 'fatty', 'favor', 'fazed', 'fears', 'feast', 'fecal', 'feeds', 'feels', 'feint', 'feist', 'fella', 'felon', 'fence', 'ferry', 'fetal', 'fetch', 'fever', 'fiber', 'field', 'fiend', 'fifth', 'fifty', 'fight', 'files', 'films', 'filth', 'final', 'finds', 'fined', 'fired', 'fires', 'first', 'fishy', 'fists', 'fitch', 'fiver', 'fives', 'fixed', 'fixer', 'fixes', 'fizzy', 'flags', 'flake', 'flame', 'flank', 'flaps', 'flare', 'flash', 'flask', 'flats', 'fleas', 'fleet', 'flesh', 'flied', 'flies', 'fling', 'flips', 'flirt', 'float', 'flock', 'flood', 'floor', 'flora', 'flour', 'flown', 'fluff', 'fluid', 'fluke', 'flume', 'flush', 'flute', 'flyer', 'foamy', 'focus', 'foggy', 'folks', 'fonts', 'foods', 'fools', 'force', 'forge', 'forgo', 'forks', 'forth', 'forty', 'forum', 'found', 'frail', 'frame', 'frank', 'fraud', 'freak', 'freed', 'fresh', 'fried', 'fries', 'frisk', 'frock', 'frogs', 'front', 'frost', 'frown', 'fruit', 'fryer', 'fudge', 'fuels', 'fully', 'fumed', 'fumes', 'funds', 'funny', 'fused', 'fussy', 'fuzzy', 'gable', 'gaffs', 'gains', 'gales', 'gamed', 'gamer', 'games', 'gangs', 'gases', 'gasps', 'gassy', 'gated', 'gaunt', 'gears', 'geeks', 'geeky', 'genes', 'genie', 'genre', 'gents', 'genus', 'germs', 'ghost', 'ghoul', 'giant', 'giddy', 'gifts', 'girls', 'girly', 'given', 'gives', 'glade', 'glare', 'glass', 'glaze', 'glean', 'glide', 'glitz', 'gloat', 'globe', 'globs', 'gloom', 'glory', 'gloss', 'glove', 'glows', 'glued', 'glues', 'gnarl', 'gnome', 'goads', 'goats', 'going', 'goods', 'goofy', 'goopy', 'goose', 'gored', 'gouge', 'grabs', 'grace', 'grade', 'grain', 'grand', 'grant', 'grape', 'graph', 'grasp', 'grass', 'gravy', 'graze', 'great', 'greed', 'green', 'greet', 'grief', 'grill', 'grind', 'gripe', 'grips', 'groan', 'groom', 'grope', 'gross', 'group', 'grove', 'growl', 'grown', 'grows', 'gruel', 'grunt', 'guard', 'guess', 'guest', 'guide', 'guild', 'guilt', 'gulps', 'gummy', 'gusts', 'gutsy', 'habit', 'hacks', 'hairy', 'halls', 'halve', 'hands', 'handy', 'hangs', 'happy', 'hardy', 'harsh', 'hatch', 'hated', 'hater', 'hates', 'haunt', 'haven', 'havoc', 'hazed', 'heads', 'heard', 'heart', 'heavy', 'heist', 'hello', 'helps', 'hence', 'herby', 'hides', 'hiked', 'hiker', 'hikes', 'hills', 'hinds', 'hinge', 'hints', 'hippo', 'hippy', 'hired', 'hitch', 'hoard', 'hobby', 'hocus', 'holds', 'holed', 'holes', 'holey', 'homed', 'honor', 'hoods', 'hoots', 'hopes', 'horde', 'horse', 'hosed', 'hoses', 'hosts', 'hound', 'hours', 'house', 'hover', 'howdy', 'hubby', 'human', 'humid', 'humor', 'humph', 'humps', 'hunts', 'hurry', 'hurts', 'icier', 'icing', 'icons', 'ideal', 'ideas', 'idiot', 'idles', 'idols', 'igloo', 'image', 'inbox', 'incur', 'index', 'inept', 'inked', 'inlet', 'inner', 'input', 'inset', 'intel', 'intro', 'iodin', 'ionic', 'irate', 'irons', 'irony', 'issue', 'items', 'ivory', 'jacks', 'jaded', 'jades', 'jails', 'janky', 'jaunt', 'jeans', 'jeers', 'jelly', 'jerks', 'jerky', 'jests', 'jewel', 'jiffy', 'jiggy', 'jinks', 'jived', 'jives', 'joins', 'joint', 'joked', 'joker', 'jokes', 'jokey', 'jolly', 'jolts', 'jowls', 'judge', 'juice', 'juicy', 'jumbo', 'jumps', 'jumpy', 'junky', 'juror', 'juvie', 'karat', 'karma', 'kayak', 'kebab', 'keels', 'keeps', 'kefir', 'keyed', 'kicks', 'kiddo', 'kiddy', 'kills', 'kings', 'kiosk', 'kited', 'kites', 'knack', 'kneel', 'knees', 'knell', 'knife', 'knobs', 'knock', 'knowl', 'known', 'knows', 'knubs', 'koala', 'kooks', 'kraft', 'label', 'labor', 'laced', 'laces', 'lacks', 'lager', 'lairy', 'lakes', 'lambs', 'lamps', 'lands', 'lapse', 'large', 'lasts', 'later', 'laugh', 'lawed', 'lawns', 'layer', 'leach', 'leady', 'leaks', 'leaky', 'leaps', 'learn', 'lease', 'leash', 'least', 'leave', 'ledge', 'leech', 'leeks', 'legal', 'leggy', 'legit', 'lemon', 'lemur', 'lends', 'letch', 'letup', 'level', 'lever', 'lexis', 'liars', 'libel', 'libra', 'lifts', 'light', 'liked', 'likes', 'limes', 'limit', 'lined', 'linen', 'liner', 'lines', 'lingo', 'lings', 'links', 'lions', 'lisps', 'lists', 'lived', 'liver', 'lives', 'loads', 'loans', 'loath', 'lobby', 'local', 'locks', 'lodge', 'lofts', 'logic', 'login', 'loner', 'longs', 'looks', 'looms', 'loops', 'loose', 'lords', 'loser', 'loses', 'lossy', 'lotto', 'lotus', 'lousy', 'loved', 'lover', 'loves', 'lower', 'loyal', 'lucid', 'lucks', 'lucky', 'lumpy', 'lunch', 'lungs', 'lurch', 'lured', 'lurks', 'lying', 'lymph', 'lyric', 'macho', 'macro', 'madam', 'madly', 'mafia', 'magic', 'maids', 'mains', 'major', 'maker', 'makes', 'males', 'males', 'mango', 'mania', 'manic', 'manly', 'maple', 'march', 'marks', 'marry', 'marsh', 'masks', 'mason', 'mates', 'mauls', 'maxim', 'maybe', 'mayor', 'meals', 'means', 'meant', 'meaty', 'medal', 'melon', 'melts', 'mends', 'merch', 'mercy', 'merge', 'merit', 'merry', 'messy', 'metal', 'meter', 'metro', 'micro', 'midst', 'might', 'miles', 'milky', 'mimic', 'mince', 'minds', 'minor', 'mints', 'minty', 'mirky', 'mites', 'mixed', 'mixer', 'mocha', 'mocks', 'modal', 'model', 'modem', 'modes', 'mogul', 'moist', 'mommy', 'money', 'month', 'moons', 'moose', 'moral', 'motel', 'motor', 'motto', 'mound', 'mount', 'mourn', 'mouse', 'mouth', 'moved', 'mover', 'moves', 'movie', 'mucky', 'mucus', 'muddy', 'multi', 'mummy', 'music', 'muted', 'myths', 'nacho', 'nails', 'naive', 'naked', 'named', 'names', 'nanny', 'nasal', 'nasty', 'natal', 'navel', 'nears', 'necks', 'needs', 'needy', 'neigh', 'nerds', 'nerdy', 'nerve', 'nervy', 'nests', 'never', 'newly', 'nicer', 'niche', 'niece', 'night', 'nines', 'ninth', 'noble', 'nobly', 'noisy', 'nomad', 'north', 'noses', 'nosey', 'noted', 'notes', 'nouns', 'nudge', 'nuked', 'nurse', 'nutty', 'nylon', 'oasis', 'obese', 'obeys', 'ocean', 'oddly', 'offal', 'offer', 'often', 'oiled', 'older', 'olive', 'omega', 'omens', 'onion', 'onset', 'opens', 'opera', 'opium', 'organ', 'ought', 'ounce', 'ousts', 'outer', 'ovary', 'ovens', 'overt', 'owing', 'owned', 'owner', 'oxide', 'ozone', 'paced', 'pacer', 'pacts', 'paged', 'pager', 'pages', 'pains', 'paint', 'pairs', 'palms', 'panda', 'panel', 'panic', 'pants', 'panty', 'paper', 'parse', 'parts', 'party', 'pasta', 'paste', 'pasty', 'patch', 'paths', 'peace', 'peach', 'pearl', 'pears', 'pecan', 'pedal', 'peels', 'peers', 'penny', 'peril', 'perky', 'pesto', 'pests', 'petal', 'photo', 'piano', 'piece', 'piled', 'pilot', 'pinch', 'pitch', 'pivot', 'pizza', 'place', 'plain', 'plane', 'plank', 'plans', 'plant', 'plate', 'plays', 'plead', 'plugs', 'plump', 'plums', 'poach', 'poems', 'poets', 'point', 'poked', 'pokes', 'poles', 'polls', 'pooch', 'poops', 'pores', 'pound', 'power', 'prank', 'prawn', 'prays', 'press', 'price', 'pride', 'print', 'prior', 'prism', 'privy', 'prize', 'probe', 'prods', 'prong', 'props', 'proud', 'prude', 'prune', 'puffy', 'pulse', 'pumps', 'punch', 'puppy', 'puree', 'purge', 'purse', 'putty', 'pylon', 'quads', 'quail', 'quake', 'queen', 'query', 'quest', 'queue', 'quick', 'quiet', 'quill', 'quilt', 'quirk', 'quite', 'quits', 'quota', 'quote', 'rabid', 'raced', 'racer', 'races', 'racks', 'radar', 'radio', 'raged', 'rages', 'rails', 'rains', 'rainy', 'raked', 'rally', 'ramen', 'ramps', 'ranch', 'range', 'rapid', 'raspy', 'rated', 'rates', 'ratio', 'raved', 'raven', 'razer', 'razor', 'react', 'reads', 'ready', 'realm', 'reams', 'reaps', 'rebel', 'rebid', 'rebuy', 'recap', 'recon', 'rehab', 'reign', 'reins', 'relay', 'relic', 'remit', 'remix', 'renal', 'renew', 'repay', 'reply', 'reset', 'resin', 'retch', 'retro', 'retry', 'reuse', 'rhino', 'rhyme', 'rides', 'ridge', 'rifle', 'rifts', 'right', 'rigid', 'rings', 'rinse', 'riots', 'ripen', 'rises', 'risks', 'risky', 'rites', 'river', 'roads', 'roars', 'roast', 'robot', 'rocks', 'rocky', 'rodeo', 'rogue', 'roles', 'rolls', 'roots', 'roped', 'ropes', 'roses', 'rough', 'round', 'rouse', 'route', 'rover', 'rowdy', 'royal', 'ruble', 'rugby', 'ruins', 'ruled', 'ruler', 'rules', 'rumor', 'runny', 'runts', 'rural', 'rusty', 'saber', 'sacks', 'sadly', 'safer', 'saint', 'salad', 'sales', 'salet', 'salon', 'salsa', 'salts', 'salty', 'sandy', 'satin', 'sauce', 'saucy', 'sauna', 'saved', 'saver', 'saves', 'savor', 'scald', 'scale', 'scalp', 'scams', 'scare', 'scarf', 'scary', 'scene', 'scent', 'scoff', 'scone', 'scope', 'score', 'scorn', 'scour', 'scram', 'scrub', 'scuba', 'scuff', 'seals', 'seats', 'sects', 'seeds', 'seeks', 'seems', 'seize', 'sends', 'sense', 'serve', 'setup', 'seven', 'sever', 'sewer', 'shack', 'shade', 'shaft', 'shake', 'shall', 'shame', 'shape', 'shark', 'shelf', 'shell', 'shift', 'shine', 'shiny', 'ships', 'shirt', 'shock', 'shoot', 'shore', 'short', 'shots', 'shout', 'shred', 'shrug', 'sided', 'silky', 'silly', 'since', 'sings', 'sinks', 'sinus', 'sited', 'sites', 'sixth', 'sixty', 'sized', 'sizes', 'skate', 'skies', 'skill', 'slack', 'slang', 'slave', 'sleep', 'sleet', 'slept', 'slick', 'slide', 'slime', 'sling', 'slope', 'slosh', 'sloth', 'slump', 'slung', 'slurp', 'slush', 'small', 'smart', 'smash', 'smear', 'smell', 'smelt', 'smile', 'smoke', 'smoky', 'snack', 'snail', 'snake', 'snare', 'snoop', 'snore', 'snuff', 'sober', 'socks', 'softy', 'solve', 'sound', 'space', 'spade', 'spare', 'spark', 'spawn', 'speak', 'spear', 'speed', 'speel', 'spicy', 'spied', 'spies', 'spiky', 'spill', 'spine', 'spite', 'split', 'spoil', 'spoke', 'spoof', 'spoon', 'spore', 'sport', 'spots', 'spout', 'squad', 'squid', 'stack', 'staff', 'stage', 'stair', 'stalk', 'stamp', 'stare', 'stars', 'start', 'stash', 'state', 'steak', 'steal', 'steam', 'steel', 'steep', 'steps', 'stich', 'stick', 'stiff', 'sting', 'stink', 'stint', 'stock', 'stoke', 'stomp', 'stone', 'stood', 'stool', 'stoop', 'store', 'storm', 'story', 'stove', 'straw', 'stray', 'stubs', 'stuck', 'stuff', 'stunt', 'style', 'sugar', 'suite', 'sunny', 'super', 'sushi', 'sweat', 'sweet', 'swell', 'swept', 'swift', 'swing', 'swipe', 'swish', 'sword', 'sworn', 'syrup', 'table', 'taboo', 'taken', 'taker', 'takes', 'tales', 'talks', 'talon', 'tango', 'tardy', 'taste', 'tasty', 'taxed', 'taxes', 'teach', 'teams', 'tease', 'teeth', 'tenet', 'tenth', 'thank', 'theft', 'their', 'theme', 'there', 'these', 'thick', 'thief', 'thigh', 'thing', 'think', 'thorn', 'those', 'three', 'threw', 'throw', 'thugs', 'thumb', 'tibia', 'tiger', 'tight', 'timer', 'tinge', 'tipsy', 'tired', 'tires', 'titan', 'titer', 'title', 'toast', 'token', 'tonic', 'tooth', 'topic', 'torch', 'torso', 'total', 'touch', 'tough', 'towel', 'tower', 'toxic', 'trace', 'tract', 'trade', 'train', 'trait', 'tramp', 'trash', 'tread', 'trees', 'trend', 'trial', 'trick', 'tried', 'truce', 'truck', 'truly', 'trunk', 'truth', 'tubes', 'tulip', 'tummy', 'tuned', 'tuner', 'turbo', 'turns', 'tweak', 'tweed', 'twice', 'twine', 'twirl', 'twist', 'typed', 'ulcer', 'ultra', 'uncle', 'under', 'undue', 'unfit', 'unify', 'union', 'unite', 'unity', 'untie', 'until', 'unzip', 'upend', 'upper', 'upset', 'urban', 'urine', 'usage', 'using', 'usurp', 'vague', 'valet', 'valid', 'value', 'valve', 'vapor', 'vault', 'vegan', 'venom', 'venue', 'verge', 'verve', 'video', 'villa', 'vinyl', 'viola', 'viper', 'viral', 'visit', 'vital', 'vivid', 'vocal', 'voice', 'vomit', 'vouch', 'wacky', 'waded', 'wager', 'wages', 'wagon', 'waist', 'walks', 'walls', 'wants', 'warns', 'warty', 'washy', 'waste', 'watch', 'water', 'waved', 'wavey', 'waxed', 'weary', 'weeks', 'weigh', 'weird', 'wench', 'whack', 'whale', 'wheat', 'wheel', 'where', 'which', 'while', 'whisk', 'white', 'whole', 'whoof', 'whose', 'widen', 'wider', 'widow', 'width', 'wield', 'wimpy', 'wince', 'winch', 'windy', 'wined', 'wines', 'wiped', 'wiper', 'wipes', 'wispy', 'witch', 'witty', 'wives', 'woken', 'woman', 'women', 'wonky', 'woozy', 'words', 'wordy', 'world', 'worst', 'would', 'wound', 'wrath', 'wreak', 'wreck', 'wring', 'wrist', 'write', 'wrong', 'wrote', 'xebec', 'xeric', 'xenia', 'xenon', 'xians', 'xrays', 'yacht', 'yahoo', 'yappy', 'yarns', 'yearn', 'years', 'yeast', 'yield', 'yikes', 'young', 'yours', 'yucky', 'yummy', 'yuppy', 'yurts', 'zebra', 'zeros', 'zesty', 'zilch', 'zingy', 'zippy', 'zones', 'zonks', 'zooms'];

let completed = []


const gridSize = 5; // Number of rows
const wordLength = 5; // Number of letters
const feedback = new Array(wordLength).fill("gray");
var whichletter = 0

let wordLocation = Math.floor(Math.random() * wordList.length)
let currentWord = wordList[wordLocation]
let currentRow = 0;
let gameOver = false;

function createGrid() {
    const container = document.getElementById("wordle-grid");
    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < wordLength; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function getInput() {
    const cells = document.querySelectorAll(".cell");
    var word = "";

    for (let i = currentRow * wordLength; i < (currentRow + 1) * wordLength; i++) {
        word += cells[i].innerHTML || "";
    }

    return word.toLowerCase();
}

function checkWord(word) {
    if (word.length !== wordLength || !wordList.includes(word)) {
        return; // Invalid word
    }



    for (let i = 0; i < wordLength; i++) {
        var letter = word[i];
        const cells = document.querySelectorAll('.cell')
        var keepletter = cells[i + currentRow * 5].innerHTML

        if (currentWord[i] === letter) {
            feedback[i] = "green";
        } else if (currentWord.includes(letter)) {
            feedback[i] = "yellow";
        } else {
            feedback[i] = "gray"
        }
        cells[i + currentRow * 5].innerHTML = keepletter
    }

    updateGrid(feedback);

    if (word === currentWord) {
        gameOver = true;
        displayResult("win");
        const saveprogress = document.getElementById('savebutton')
        saveprogress.classList.remove('hidden')
        completed[wordLocation] = true
    } else if (currentRow === gridSize) {
        gameOver = true;
        displayResult("lose");
    }
}

function updateGrid(feedback) {
    const cells = document.querySelectorAll(".cell");

    for (let i = currentRow * wordLength; i < (currentRow + 1) * wordLength; i++) {
        cells[i].classList.add(feedback[i - currentRow * wordLength]);
    }

    currentRow++;
}

function displayResult(status, word = "") {
    const message = document.getElementById("message");

    message.textContent = `You ${status}${word ? `: ${word}` : ""}`;
    message.classList.add(status);
}

function handleKeyPress(event) {
    if (gameOver) return;

    const key = event.key.toLowerCase();

    const cells = document.querySelectorAll(".cell")

    if (key.length === 1 && /[a-z]/.test(key) && whichletter < (currentRow * 5) + 5) {
        cells[whichletter].innerHTML = key;
        whichletter++
    } else if (key === "backspace" && document.activeElement.textContent && whichletter > currentRow * 5) {
        cells[whichletter - 1].innerHTML = ""
        whichletter--

    } else if (key === "enter") {
        const word = getInput();
        checkWord(word);
    }
}

createGrid();
document.addEventListener("keydown", handleKeyPress);



function saveJSON(filename) {
    // Convert data to JSON string
    const jsonData = JSON.stringify(completed);  // Add indentation for readability (optional)

    // Create a blob object with the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a downloadable link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Trigger the download
    link.click();
}



